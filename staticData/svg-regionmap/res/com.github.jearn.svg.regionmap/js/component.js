define(
		[ "d3", "sap/designstudio/sdk/component"
		// , "css!../css/component.css"
		],
		function(d3, Component
		// , css
		) {
			Component
					.subclass(
							"com.github.jearn.svg.regionmap.SVGRegionmap",
							function() {
								"use strict";

								var that = this;

								var myContainer;
								var myUpperLimit;
								var myLowerLimit;
								var myUpperColor;
								var myMidColor;
								var myLowerColor;
								var myRegions;

								this.init = function() {
									// called once to initialize component
									that.myContainer = this.$();
									this.appendSvg(this.$());
								};
								this.beforeUpdate = function() {
									// called before a property is updated (old
									// values), e.g. to remove something
									// displayed related to old value
								};
								this.afterUpdate = function() {
									// called after a property is updated (new
									// values), e.g. to add something displaying
									// related to new value
									//alert("afterUpdate"+that.myRegions);
									that.myContainer = this.$();
									if ((that.myRegions !== undefined) && (that.myRegions.length !== undefined) && (that.myRegions.length >0)) {
										//alert(""+that.myRegions.length);
										that.myRegions.forEach(this.forEachItem);
									}
									//alert("afterUpdate Ende");
								};
								this.componentDeleted = function() {
									// called once to delete component. When
									// something outside the scope of this
									// component is created from this component,
									// cleanup should follow here.
								};
								this.that = function(e) {
									return this;
								};
								this.appendSvg = function(container) {
									//alert("appendSvg");
									//var container = this.$();
									var imageUrl = sap.zen
											.createStaticSdkMimeUrl(
													"com.github.jearn.svg.regionmap",
													"res/com.github.jearn.svg.regionmap/js/regionmap.svg");
									d3.xml(imageUrl, "image/svg+xml", function(
											error, xml) {
										if (error) {
											// throw error;
											alert(error);
										}
										container.html(xml.documentElement);
										//that.myContainer.append(xml.documentElement);
										if ((that.myRegions !== undefined) && (that.myRegions.length !== undefined) && (that.myRegions.length >0)) {
											//alert(""+that.myRegions.length);
											that.myRegions.forEach(that.forEachItem);
										}
									});
								};
								this.regions = function(items) {
									if (items === undefined) {
										return that.myRegions;
									} else {
										that.myRegions = items;
										//alert("myRegions"+that.myRegions);
										//that.myRegions.forEach(this.forEachItem);
										//this.firePropertyChanged("regions");
										return this;
									}
								};
								this.lowerLimit = function(value) {
									if (value === undefined) {
										return that.myLowerLimit;
									} else {
										if ((true) || (that.myUpperLimit === undefined) || (value < that.myUpperLimit)) {
											that.myLowerLimit = value;
										} else {
											throw Error("LowerLimit must be lesser UpperLimit!");
										}
										return this;
									}
								};
								this.upperLimit = function(value) {
									if (value === undefined) {
										return that.myUpperLimit;
									} else {
										if ((true) || (that.myLowerLimit === undefined) || (value > that.myLowerLimit)) {
											that.myUpperLimit = value;
										} else {
											throw Error("UpperLimit must be higher LowerLimit!");
										}
										return this;
									}
								};
								this.lowerColor = function(value) {
									if (value === undefined) {
										return that.myLowerColor;
									} else {
										that.myLowerColor = value;
										return this;
									}
								};
								this.midColor = function(value) {
									if (value === undefined) {
										return that.myMidColor;
									} else {
										that.myMidColor = value;
										return this;
									}
								};
								this.upperColor = function(value) {
									if (value === undefined) {
										return that.myUpperColor;
									} else {
										that.myUpperColor = value;
										return this;
									}
								};
								/**
								 * Changes a specific region color
								 */
								this.forEachItem = function(item,
										index) {
									//alert(item.key+":"+item.value);
									var regionID = item.key;
									//alert(regionID);
									var regionPercent = item.value;
									//alert(regionPercent);
									//alert(""+regionID+":"+regionPercent+","+that.myUpperLimit+":"+that.myLowerLimit);
									//this.fillRegionByPercent(item.key, item.value));
									var element = $("#"+regionID);
									//alert(element);
									var regionColor = 'none';
									if (regionPercent >= that.myUpperLimit) {
										regionColor = that.myUpperColor;
									} else if (regionPercent <= that.myLowerLimit) {
										regionColor = that.myLowerColor;
									} else {
										regionColor = that.myMidColor;
									}
									//alert(regionColor);
									element.attr('style', 'fill:'
											+ regionColor
											+ ';stroke:#000000;stroke-width:1');
								};
							});
		});
