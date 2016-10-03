/**
 * 
 */
package com.github.jearn.svg.regionmap;

import com.github.jearn.svg.regionmap.impl.SVGRegionmapComponent;
import com.github.jearn.svg.regionmap.md.SVGRegionmapComponentMetadataProvider;
import com.sap.ip.bi.base.bundle.IActivatorBase;
import com.sap.ip.bi.zen.rt.framework.bundle.FrameworkBaseRegistrator;

/**
 * @author jearn
 *
 */
public class Registrator extends FrameworkBaseRegistrator {

	/**
	 * @param activatorBase
	 */
	public Registrator(IActivatorBase activatorBase) {
		super(activatorBase);
		// TODO Auto-generated constructor stub
	}

	/* (non-Javadoc)
	 * @see com.sap.ip.bi.base.bundle.IRegistratorBase#initialize()
	 */
	@Override
	public void initialize() {
		addMetadata(SVGRegionmapComponentMetadataProvider.METADATA_PROVIDER_NAME,
				SVGRegionmapComponentMetadataProvider.class);

		addItem(SVGRegionmapComponent.COMPONENT_TYPE, SVGRegionmapComponent.class);
	}

}
