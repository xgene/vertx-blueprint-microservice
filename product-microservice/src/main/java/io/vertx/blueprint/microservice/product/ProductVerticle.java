package io.vertx.blueprint.microservice.product;

import io.vertx.blueprint.microservice.common.BaseMicroserviceVerticle;
import io.vertx.blueprint.microservice.common.service.ExampleHelper;
import io.vertx.blueprint.microservice.product.api.RestProductAPIVerticle;
import io.vertx.blueprint.microservice.product.impl.ProductServiceImpl;
import io.vertx.core.DeploymentOptions;
import io.vertx.core.Future;
import io.vertx.serviceproxy.ProxyHelper;
import io.vertx.serviceproxy.ServiceBinder;

import static io.vertx.blueprint.microservice.product.ProductService.SERVICE_ADDRESS;


/**
 * A verticle publishing the product service.
 *
 * @author Eric Zhao
 */
public class ProductVerticle extends BaseMicroserviceVerticle {

  @Override
  public void start(Future<Void> future) throws Exception {
    super.start();

    // create the service instance
    ProductService productService = new ProductServiceImpl(vertx, config());
    // register the service proxy on event bus
//    ProxyHelper.registerService(ProductService.class, vertx, productService, SERVICE_ADDRESS);
    ServiceBinder serviceBinder = new ServiceBinder(vertx);
    serviceBinder.setAddress(SERVICE_ADDRESS).register(ProductService.class,  productService);
    // publish the service in the discovery infrastructure
    initProductDatabase(productService)
      .compose(databaseOkay -> publishEventBusService(ProductService.SERVICE_NAME, SERVICE_ADDRESS, ProductService.class))
      .compose(servicePublished -> deployRestService(productService))
      .setHandler(future);
  }

  private Future<Void> initProductDatabase(ProductService service) {
    Future<Void> initFuture = Future.future();
    service.initializePersistence(initFuture.completer());
    return initFuture.map(v -> {
      ExampleHelper.initData(vertx, config());
      return null;
    });
  }

  private Future<Void> deployRestService(ProductService service) {
    Future<String> future = Future.future();
    vertx.deployVerticle(new RestProductAPIVerticle(service),
      new DeploymentOptions().setConfig(config()),
      future);
    return future.map(r -> null);
  }

}
