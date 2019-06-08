package io.vertx.blueprint.microservice.order;

import io.vertx.core.json.JsonObject;
import io.vertx.core.json.JsonArray;
import java.time.Instant;
import java.time.format.DateTimeFormatter;

/**
 * Converter for {@link io.vertx.blueprint.microservice.order.CheckoutResult}.
 * NOTE: This class has been automatically generated from the {@link io.vertx.blueprint.microservice.order.CheckoutResult} original class using Vert.x codegen.
 */
public class CheckoutResultConverter {

  public static void fromJson(Iterable<java.util.Map.Entry<String, Object>> json, CheckoutResult obj) {
    for (java.util.Map.Entry<String, Object> member : json) {
      switch (member.getKey()) {
        case "message":
          if (member.getValue() instanceof String) {
            obj.setMessage((String)member.getValue());
          }
          break;
        case "order":
          if (member.getValue() instanceof JsonObject) {
            obj.setOrder(new io.vertx.blueprint.microservice.order.Order((JsonObject)member.getValue()));
          }
          break;
      }
    }
  }

  public static void toJson(CheckoutResult obj, JsonObject json) {
    toJson(obj, json.getMap());
  }

  public static void toJson(CheckoutResult obj, java.util.Map<String, Object> json) {
    if (obj.getMessage() != null) {
      json.put("message", obj.getMessage());
    }
    if (obj.getOrder() != null) {
      json.put("order", obj.getOrder().toJson());
    }
  }
}
