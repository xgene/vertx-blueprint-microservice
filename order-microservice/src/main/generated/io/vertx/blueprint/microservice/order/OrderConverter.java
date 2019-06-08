package io.vertx.blueprint.microservice.order;

import io.vertx.core.json.JsonObject;
import io.vertx.core.json.JsonArray;
import java.time.Instant;
import java.time.format.DateTimeFormatter;

/**
 * Converter for {@link io.vertx.blueprint.microservice.order.Order}.
 * NOTE: This class has been automatically generated from the {@link io.vertx.blueprint.microservice.order.Order} original class using Vert.x codegen.
 */
public class OrderConverter {

  public static void fromJson(Iterable<java.util.Map.Entry<String, Object>> json, Order obj) {
    for (java.util.Map.Entry<String, Object> member : json) {
      switch (member.getKey()) {
        case "buyerId":
          if (member.getValue() instanceof String) {
            obj.setBuyerId((String)member.getValue());
          }
          break;
        case "createTime":
          if (member.getValue() instanceof Number) {
            obj.setCreateTime(((Number)member.getValue()).longValue());
          }
          break;
        case "orderId":
          if (member.getValue() instanceof Number) {
            obj.setOrderId(((Number)member.getValue()).longValue());
          }
          break;
        case "payId":
          if (member.getValue() instanceof String) {
            obj.setPayId((String)member.getValue());
          }
          break;
        case "products":
          if (member.getValue() instanceof JsonArray) {
            java.util.ArrayList<io.vertx.blueprint.microservice.product.ProductTuple> list =  new java.util.ArrayList<>();
            ((Iterable<Object>)member.getValue()).forEach( item -> {
              if (item instanceof JsonObject)
                list.add(new io.vertx.blueprint.microservice.product.ProductTuple((JsonObject)item));
            });
            obj.setProducts(list);
          }
          break;
        case "totalPrice":
          if (member.getValue() instanceof Number) {
            obj.setTotalPrice(((Number)member.getValue()).doubleValue());
          }
          break;
      }
    }
  }

  public static void toJson(Order obj, JsonObject json) {
    toJson(obj, json.getMap());
  }

  public static void toJson(Order obj, java.util.Map<String, Object> json) {
    if (obj.getBuyerId() != null) {
      json.put("buyerId", obj.getBuyerId());
    }
    if (obj.getCreateTime() != null) {
      json.put("createTime", obj.getCreateTime());
    }
    if (obj.getOrderId() != null) {
      json.put("orderId", obj.getOrderId());
    }
    if (obj.getPayId() != null) {
      json.put("payId", obj.getPayId());
    }
    if (obj.getProducts() != null) {
      JsonArray array = new JsonArray();
      obj.getProducts().forEach(item -> array.add(item.toJson()));
      json.put("products", array);
    }
    if (obj.getTotalPrice() != null) {
      json.put("totalPrice", obj.getTotalPrice());
    }
  }
}
