package io.vertx.blueprint.microservice.payment;

import io.vertx.core.json.JsonObject;
import io.vertx.core.json.JsonArray;
import java.time.Instant;
import java.time.format.DateTimeFormatter;

/**
 * Converter for {@link io.vertx.blueprint.microservice.payment.Payment}.
 * NOTE: This class has been automatically generated from the {@link io.vertx.blueprint.microservice.payment.Payment} original class using Vert.x codegen.
 */
public class PaymentConverter {

  public static void fromJson(Iterable<java.util.Map.Entry<String, Object>> json, Payment obj) {
    for (java.util.Map.Entry<String, Object> member : json) {
      switch (member.getKey()) {
        case "payAmount":
          if (member.getValue() instanceof Number) {
            obj.setPayAmount(((Number)member.getValue()).doubleValue());
          }
          break;
        case "payId":
          if (member.getValue() instanceof String) {
            obj.setPayId((String)member.getValue());
          }
          break;
        case "paySource":
          if (member.getValue() instanceof Number) {
            obj.setPaySource(((Number)member.getValue()).shortValue());
          }
          break;
        case "paymentTime":
          if (member.getValue() instanceof Number) {
            obj.setPaymentTime(((Number)member.getValue()).longValue());
          }
          break;
      }
    }
  }

  public static void toJson(Payment obj, JsonObject json) {
    toJson(obj, json.getMap());
  }

  public static void toJson(Payment obj, java.util.Map<String, Object> json) {
    if (obj.getPayAmount() != null) {
      json.put("payAmount", obj.getPayAmount());
    }
    if (obj.getPayId() != null) {
      json.put("payId", obj.getPayId());
    }
    if (obj.getPaySource() != null) {
      json.put("paySource", obj.getPaySource());
    }
    if (obj.getPaymentTime() != null) {
      json.put("paymentTime", obj.getPaymentTime());
    }
  }
}
