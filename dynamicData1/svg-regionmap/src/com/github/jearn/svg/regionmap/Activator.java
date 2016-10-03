package com.github.jearn.svg.regionmap;

import java.util.Properties;

import com.sap.ip.bi.base.bundle.impl.ActivatorBase;

/**
 * @author jearn
 *
 */
public class Activator extends ActivatorBase {

	private static final String KEY = Activator.class.getCanonicalName();

	public static void main(String[] args) {
		ActivatorBase.printVersion(new Activator(), args);
	}

	@Override
	public String getKey() {
		return Activator.KEY;
	}
	
	@Override
	protected Properties getMappingProperties() {
		Registrator registration = new Registrator(this);
		registration.initialize();
		return registration.getProperties();
	}
}
