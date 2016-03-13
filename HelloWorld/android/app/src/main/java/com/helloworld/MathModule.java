package com.helloworld;

import android.content.Intent;
import android.support.annotation.Nullable;

import com.facebook.react.bridge.Arguments;
import com.facebook.react.bridge.Callback;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.modules.core.DeviceEventManagerModule;

/**
 * 作者:王浩 邮件:bingoogolapple@gmail.com
 * 创建时间:16/3/13 上午10:50
 * 描述:
 */
public class MathModule extends ReactContextBaseJavaModule {

    public MathModule(ReactApplicationContext reactContext) {
        super(reactContext);
    }

    @Override
    public String getName() {
        return "CustomMathAndroid";
    }

    @ReactMethod
    public void add(int a, int b, Callback successCallback) {
        successCallback.invoke(a + b);
    }

    @ReactMethod
    public void addWithError(int a, int b, Callback errorCallback, Callback successCallback) {
        if (a > 0 && b > 0) {
            successCallback.invoke(a, b, a + b);
        } else {
            errorCallback.invoke("a和b都必须大于零");
        }

        WritableMap params = Arguments.createMap();
        params.putInt("intKey", 666);
        params.putString("stringKey", "字符串啊");
        params.putBoolean("booleanKeyTrue", true);
        params.putBoolean("booleanKeyFalse", false);
        sendEvent(getReactApplicationContext(), "testEvent", params);


        Intent intent = new Intent(getReactApplicationContext(), SecondActivity.class);
        intent.addFlags(Intent.FLAG_ACTIVITY_NEW_TASK);
        getReactApplicationContext().startActivity(intent);
    }

    private void sendEvent(ReactContext reactContext, String eventName, @Nullable WritableMap params) {
        reactContext
                .getJSModule(DeviceEventManagerModule.RCTDeviceEventEmitter.class)
                .emit(eventName, params);
    }

}