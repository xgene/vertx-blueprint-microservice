package io.vertx.blueprint.microservice.cart;

import io.vertx.core.json.JsonObject;
import io.vertx.core.json.JsonArray;
import java.time.Instant;
import java.time.format.DateTimeFormatter;

/**
 * Converter for {@link io.vertx.blueprint.microservice.cart.ShoppingCart}.
 * NOTE: This class has been automatically generated from the {@link io.vertx.blueprint.microservice.cart.ShoppingCart} original class using Vert.x codegen.
 */
public class ShoppingCartConverter {

  public static void fromJson(Iterable<java.util.Map.Entry<String, Object>> json, ShoppingCart obj) {
    for (java.util.Map.Entry<String, Object> member : json) {
      switch (member.getKey()) {
        case "empty":
          break;
        case "productItems":
          if (member.getValue() instanceof JsonArray) {
            java.util.ArrayList<io.vertx.blueprint.microservice.product.ProductTuple> list =  new java.util.ArrayList<>();
            ((Iterable<Object>)member.getValue()).forEach( item -> {
              if (item instanceof JsonObject)
                list.add(new io.vertx.blueprint.microservice.product.ProductTuple((JsonObject)item));
            });
            obj.setProductItems(list);
          }
          break;
      }
    }
  }

  public static void toJson(ShoppingCart obj, JsonObject json) {
    toJson(obj, json.getMap());
  }

  public static void toJson(ShoppingCart obj, java.util.Map<String, Object> json) {
    json.put("empty", obj.isEmpty());
    if (obj.getProductItems() != null) {
      JsonArray array = new JsonArray();
      obj.getProductItems().forEach(item -> array.add(item.toJson()));
      json.put("productItems", array);
    }
  }
}
