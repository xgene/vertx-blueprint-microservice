package io.vertx.blueprint.microservice.cart;

import io.vertx.core.json.JsonObject;
import io.vertx.core.json.JsonArray;
import java.time.Instant;
import java.time.format.DateTimeFormatter;

/**
 * Converter for {@link io.vertx.blueprint.microservice.cart.CartEvent}.
 * NOTE: This class has been automatically generated from the {@link io.vertx.blueprint.microservice.cart.CartEvent} original class using Vert.x codegen.
 */
public class CartEventConverter {

  public static void fromJson(Iterable<java.util.Map.Entry<String, Object>> json, CartEvent obj) {
    for (java.util.Map.Entry<String, Object> member : json) {
      switch (member.getKey()) {
        case "amount":
          if (member.getValue() instanceof Number) {
            obj.setAmount(((Number)member.getValue()).intValue());
          }
          break;
        case "cartEventType":
          if (member.getValue() instanceof String) {
            obj.setCartEventType(io.vertx.blueprint.microservice.cart.CartEventType.valueOf((String)member.getValue()));
          }
          break;
        case "createdAt":
          if (member.getValue() instanceof Number) {
            obj.setCreatedAt(((Number)member.getValue()).longValue());
          }
          break;
        case "id":
          if (member.getValue() instanceof Number) {
            obj.setId(((Number)member.getValue()).longValue());
          }
          break;
        case "productId":
          if (member.getValue() instanceof String) {
            obj.setProductId((String)member.getValue());
          }
          break;
        case "userId":
          if (member.getValue() instanceof String) {
            obj.setUserId((String)member.getValue());
          }
          break;
      }
    }
  }

  public static void toJson(CartEvent obj, JsonObject json) {
    toJson(obj, json.getMap());
  }

  public static void toJson(CartEvent obj, java.util.Map<String, Object> json) {
    if (obj.getAmount() != null) {
      json.put("amount", obj.getAmount());
    }
    if (obj.getCartEventType() != null) {
      json.put("cartEventType", obj.getCartEventType().name());
    }
    if (obj.getCreatedAt() != null) {
      json.put("createdAt", obj.getCreatedAt());
    }
    if (obj.getId() != null) {
      json.put("id", obj.getId());
    }
    if (obj.getProductId() != null) {
      json.put("productId", obj.getProductId());
    }
    if (obj.getUserId() != null) {
      json.put("userId", obj.getUserId());
    }
  }
}
