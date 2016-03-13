package com.helloworld.badge;

import android.content.Context;
import android.view.View;
import android.widget.LinearLayout;

import com.helloworld.R;

import cn.bingoogolapple.badgeview.BGABadgeTextView;
import cn.bingoogolapple.badgeview.BGADragDismissDelegate;

/**
 * 作者:王浩 邮件:bingoogolapple@gmail.com
 * 创建时间:16/3/13 下午12:24
 * 描述:
 */
public class ReactBGABadgeView extends LinearLayout {
    private BGABadgeTextView mContentBtv;

    public ReactBGABadgeView(Context context) {
        super(context);
        View.inflate(context, R.layout.layout_custom, this);
        mContentBtv = (BGABadgeTextView) findViewById(R.id.content_btv);
    }

    public void showTextBadge(String text) {
        mContentBtv.showTextBadge(text);
    }

    public void showCirclePointBadge() {
        mContentBtv.showCirclePointBadge();
    }

    public void hiddenBadge() {
        mContentBtv.hiddenBadge();
    }

    public void setDragDismissDelegage(BGADragDismissDelegate delegate) {
        mContentBtv.setDragDismissDelegage(delegate);
    }
}
