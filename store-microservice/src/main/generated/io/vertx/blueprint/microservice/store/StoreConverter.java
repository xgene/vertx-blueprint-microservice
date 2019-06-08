package io.vertx.blueprint.microservice.store;

import io.vertx.core.json.JsonObject;
import io.vertx.core.json.JsonArray;
import java.time.Instant;
import java.time.format.DateTimeFormatter;

/**
 * Converter for {@link io.vertx.blueprint.microservice.store.Store}.
 * NOTE: This class has been automatically generated from the {@link io.vertx.blueprint.microservice.store.Store} original class using Vert.x codegen.
 */
public class StoreConverter {

  public static void fromJson(Iterable<java.util.Map.Entry<String, Object>> json, Store obj) {
    for (java.util.Map.Entry<String, Object> member : json) {
      switch (member.getKey()) {
        case "description":
          if (member.getValue() instanceof String) {
            obj.setDescription((String)member.getValue());
          }
          break;
        case "name":
          if (member.getValue() instanceof String) {
            obj.setName((String)member.getValue());
          }
          break;
        case "openTime":
          if (member.getValue() instanceof Number) {
            obj.setOpenTime(((Number)member.getValue()).longValue());
          }
          break;
        case "sellerId":
          if (member.getValue() instanceof String) {
            obj.setSellerId((String)member.getValue());
          }
          break;
      }
    }
  }

  public static void toJson(Store obj, JsonObject json) {
    toJson(obj, json.getMap());
  }

  public static void toJson(Store obj, java.util.Map<String, Object> json) {
    if (obj.getDescription() != null) {
      json.put("description", obj.getDescription());
    }
    if (obj.getName() != null) {
      json.put("name", obj.getName());
    }
    if (obj.getOpenTime() != null) {
      json.put("openTime", obj.getOpenTime());
    }
    if (obj.getSellerId() != null) {
      json.put("sellerId", obj.getSellerId());
    }
  }
}
