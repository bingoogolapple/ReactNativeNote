package com.helloworld.badge;

import android.os.SystemClock;
import android.text.TextUtils;

import com.facebook.react.common.MapBuilder;
import com.facebook.react.uimanager.SimpleViewManager;
import com.facebook.react.uimanager.ThemedReactContext;
import com.facebook.react.uimanager.UIManagerModule;
import com.facebook.react.uimanager.annotations.ReactProp;

import java.util.Map;

import cn.bingoogolapple.badgeview.BGABadgeable;
import cn.bingoogolapple.badgeview.BGADragDismissDelegate;

/**
 * 作者:王浩 邮件:bingoogolapple@gmail.com
 * 创建时间:16/3/13 下午12:24
 * 描述:
 */
public class ReactBGABadgeViewManager extends SimpleViewManager<ReactBGABadgeView> {
    private static final String REACT_CLASS = "AndroidBGABadgeView";

    @Override
    public String getName() {
        return REACT_CLASS;
    }

    @Override
    protected ReactBGABadgeView createViewInstance(ThemedReactContext reactContext) {
        return new ReactBGABadgeView(reactContext);
    }

    @ReactProp(name = "textBadge")
    public void showTextBadge(ReactBGABadgeView view, String text) {
        if (TextUtils.isEmpty(text)) {
            view.hiddenBadge();
        } else {
            view.showTextBadge(text);
        }
    }

    @ReactProp(name = "circlePointBadge", defaultBoolean = false)
    public void showCirclePointBadge(ReactBGABadgeView view, boolean isShowCircleBadge) {
        if (isShowCircleBadge) {
            view.showCirclePointBadge();
        } else {
            view.hiddenBadge();
        }
    }

    @Override
    protected void addEventEmitters(final ThemedReactContext reactContext, final ReactBGABadgeView view) {
        view.setDragDismissDelegage(new BGADragDismissDelegate() {
            @Override
            public void onDismiss(BGABadgeable badgeable) {
                // 一定要用view.getId()，不能用badgeable.getId()，这个坑踩了半天
                reactContext.getNativeModule(UIManagerModule.class).getEventDispatcher()
                        .dispatchEvent(new ReactBGABadgeViewEvent(view.getId(), SystemClock.uptimeMillis()));
            }
        });
    }

    @Override
    public Map<String, Object> getExportedCustomDirectEventTypeConstants() {
        return MapBuilder.<String, Object>builder()
                .put(ReactBGABadgeViewEvent.EVENT_NAME, MapBuilder.of("registrationName", "onDismiss"))
                .build();
    }
}
