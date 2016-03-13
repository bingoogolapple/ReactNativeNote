package com.helloworld;

import com.facebook.react.ReactPackage;
import com.facebook.react.bridge.JavaScriptModule;
import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.uimanager.ViewManager;
import com.helloworld.badge.ReactBGABadgeViewManager;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

/**
 * 作者:王浩 邮件:bingoogolapple@gmail.com
 * 创建时间:16/3/8 上午1:44
 * 描述:
 */
public class CustomReactPackage implements ReactPackage {

    @Override
    public List<NativeModule> createNativeModules(ReactApplicationContext reactContext) {
        return Arrays.<NativeModule>asList(new ToastModule(reactContext), new MathModule(reactContext));
    }

    @Override
    public List<Class<? extends JavaScriptModule>> createJSModules() {
        return new ArrayList<>();
    }

    @Override
    public List<ViewManager> createViewManagers(ReactApplicationContext reactContext) {
        return Arrays.<ViewManager>asList(new ReactBGABadgeViewManager());
    }
}