/**
 * 
 */
package com.github.jearn.svg.regionmap.impl;

import com.sap.ip.bi.metadata.IMdItem;
import com.sap.ip.bi.webapplications.runtime.service.renderserialization.IRenderSerializer;
import com.sap.ip.bi.zen.rt.components.base.ZenUiComponent;

/**
 * @author jearn
 *
 */
public class SVGRegionmapComponent extends ZenUiComponent {
	public static final String COMPONENT_TYPE = "SVGRegionmap_COMPONENT";

	/**
	 * 
	 */
	public SVGRegionmapComponent() {
		// TODO Auto-generated constructor stub
	}

	/* (non-Javadoc)
	 * @see com.sap.ip.bi.webapplications.runtime.service.jscollector.IItemWithJavaScriptIncludes#getJavaScriptIncludes(com.sap.ip.bi.metadata.IMdItem)
	 */
	@Override
	public String[] getJavaScriptIncludes(IMdItem arg0) {
		// TODO Auto-generated method stub
		return null;
	}

	/* (non-Javadoc)
	 * @see com.sap.ip.bi.webapplications.ui.items.UiItem#renderComponentContent(com.sap.ip.bi.webapplications.runtime.service.renderserialization.IRenderSerializer)
	 */
	@Override
	public void renderComponentContent(IRenderSerializer arg0) {
		// TODO Auto-generated method stub

	}

}
