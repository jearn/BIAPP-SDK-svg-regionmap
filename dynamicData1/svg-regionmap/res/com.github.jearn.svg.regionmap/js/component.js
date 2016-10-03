define(
		[ "d3", "sap/designstudio/sdk/component"
		// , "css!../css/component.css"
		],
		function(d3, Component
		// , css
		) {

		    function IndexMap() {
		        this.current = undefined;
		        this.array = [];
		    }

		        // Query Operations
		    IndexMap.prototype.size = function() {
		        return this.array.length;
		    };
		    IndexMap.prototype.isEmpty = function() {
		        return this.size()<1;
		    };
		    IndexMap.prototype.containsKey = function(key) {
		        var index = this.getIndex(key);
		        return index > -1;
		    };
		    IndexMap.prototype.containsValue = function(value) {
		        var index = this.getIndexOfValue(value);
		        return index > -1;
		    };
		    IndexMap.prototype.get = function(key) {
		    	var index = this.getIndex(key);
		        if ((index > -1) && (index < this.array.length)) {
		            // return
		            return this.array[index].value;
		        }
		        return undefined;
		    };
		        // Special Query Operations
		    IndexMap.prototype.getIndex = function(key) {
		        var index = -1;
		        var length = this.array.length;
		        if (length > 0) {
		            for (var i=0; i<length; i++) {
		                if (this.array[i].key == key) {
		                    index = i;
		                    i=length;
		                }
		            }
		        }
		        return index;
		    };
		    IndexMap.prototype.getIndexOfValue = function(value) {
		        var index = -1;
		        var length = this.array.length;
		        if (length > 0) {
		            for (var i=0; i<length; i++) {
		                if (this.array[i].value == value) {
		                    index = i;
		                    i=length;
		                }
		            }
		        }
		        return index;
		    };
		    IndexMap.prototype.getIndexesOfValue = function(value) {
		        var indexArray = [];
		        var length = this.array.length;
		        if (length > 0) {
		            for (var i=0; i<length; i++) {
		                if (this.array[i].value == value) {
		                    indexArray.push(i);
		                }
		            }
		        }
		        return indexArray;
		    };
		    IndexMap.prototype.getValueAtIndex = function(index) {
		        if ((index > -1) && (index < this.array.length)) {
		            // return
		            return this.array[index].value;
		        }
		        return undefined;
		    };
		    IndexMap.prototype.getKeyAtIndex = function(index) {
		        if ((index > -1) && (index < this.array.length)) {
		            // return
		            return this.array[index].key;
		        }
		        return undefined;
		    };
		    IndexMap.prototype.getKeyOfValue = function(value) {
		        var key = undefined;
		        var index = this.getIndexOfValue(value);
		        key = this.getKeyAtIndex(index);
		        return key;
		    };
		    IndexMap.prototype.getKeysOfValue = function(value) {
		        var keysArray = [];
		        var indexArray = this.getIndexesOfValue(value);
		        var length = indexArray.length;
		        if (length > 0) {
		            for (var i=0; i<length; i++) {
		                keysArray.push(this.array[indexArray[i]].key);
		            }
		        }
		        return keysArray;
		    };
		    
		        // Modification Operations
		    IndexMap.prototype.put = function(key, value) {
		        var index = this.getIndex(key);
		        if (index > -1) {
		            this.array[index] = {key: key, value: value};
		        } else {
		            this.array.push({key: key, value: value});
		        }
		    };
		    IndexMap.prototype.remove = function(key) {
		        var index = this.getIndex(key);
		        this.removeByIndex(index);
		    };
		        // Special Modification Operations
		    IndexMap.prototype.putByIndex = function(index, key, value) {
		        var length = this.array.length;
		        if (index >= length) {
		        	this.put(key, value);
		        	index = this.array.length;
		        	// return
		        	return index;
		        } else {
		            var oldIndex = this.getIndex(key);
		            var element = {key: key, value: value};
		            if (oldIndex > -1) {
		                if (index == oldIndex) {
		                    this.array[index] = element;
		                    // return
		                    return index;
		                } else {
		                    this.removeByIndex(index);
		                }
		            }
		            this.array.splice(index, 0, element);
		        }
		        return index;
		    };
		    IndexMap.prototype.removeByIndex = function(index) {
		        if ((index > -1) && (index < this.array.length)) {
		            this.array.splice(index, 1);
		        }
		    };
		    IndexMap.prototype.removeByValue = function(value) {
		        var index = this.getIndexOfValue(value);
		        this.removeByIndex(index);
		    };
		    IndexMap.prototype.removeAllByValue = function(value) {
		        var indexArray = this.getIndexesOfValue(value);
		        var length = indexArray.length;
		        if (length > 0) {
		            for (var i=0; i<length; i++) {
		                this.removeByIndex(indexArray[i]);
		            }
		        }
		    };
		    
		        // Bulk Operations
		    IndexMap.prototype.putAll = function(map) {
		        this.current = undefined;
		        this.array = [];
		        var mapArray = map.getItems();
		        var length = mapArray.length;
		        if (length > 0) {
		            for (var i=0; i<length; i++) {
		            	this.array.push({key: mapArray[i].key, value: mapArray[i].value});
		            }
		        }
		    };
		    IndexMap.prototype.putItems = function(items) {
		        this.current = undefined;
		        this.array = [];
		        var length = items.length;
		        if (length > 0) {
		            for (var i=0; i<length; i++) {
		            	this.array.push({key: items[i].key, value: items[i].value});
		            }
		        }
		    };
		    IndexMap.prototype.removeAll = function() {
		        this.clear();
		    };
		    IndexMap.prototype.clear = function() {
		        this.current = undefined;
		        this.array = new Array(0);
		    };
		    
		        // Iterator Operations
		    IndexMap.prototype.next = function() {
		        if (this.hasNext()) {
		            if (this.current == undefined) {
		                this.current = 0;
		            } else {
		                this.current = this.current++;
		            }
		            // return
		            return this.array[this.current];
		        }
		        return {};
		    };
		    IndexMap.prototype.hasNext = function() {
		        if ((this.array.length > 0) &&
		            ((this.current == undefined) || (this.current < this.array.length))) {
		            // return
		            return true;
		        }
		        return false;
		    };
		    
		        // Views
		    IndexMap.prototype.getItems = function() {
		        return this.array;
		    };
		    IndexMap.prototype.keys = function() {
		        var keysArray = [];
		        var length = this.array.length;
		        if (length > 0) {
		            for (var i=0; i<length; i++) {
		                keysArray.push(this.array[i].key);
		            }
		        }
		        return keysArray;
		    };
		    IndexMap.prototype.values = function() {
		        var valuesArray = [];
		        var length = this.array.length;
		        if (length > 0) {
		            for (var i=0; i<length; i++) {
		                valuesArray.push(this.array[i].value);
		            }
		        }
		        return valuesArray;
		    };

		    function SVGRegionmap() {
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
					if ((that.myRegions !== undefined)
							&& (that.myRegions.size() !== undefined)
							&& (that.myRegions.size() > 0)) {
						//alert(""+that.myRegions.length);
						that.myRegions.getItems().forEach(that.forEachItem);
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
						if ((that.myRegions !== undefined)
								&& (that.myRegions.size() !== undefined)
								&& (that.myRegions.size() > 0)) {
							//alert(""+that.myRegions.length);
							that.myRegions.getItems().forEach(that.forEachItem);
						}
					});
				};
				this.regions = function(items) {
					if (items === undefined) {
						return that.myRegions;
					} else {
						that.myRegions = new IndexMap()
						that.myRegions.putItems(items);
						//alert("myRegions"+that.myRegions);
						//that.myRegions.forEach(this.forEachItem);
						//this.firePropertyChanged("regions");
						return this;
					}
				};
				this.indexMap = function(indexMap) {
					if (indexMap === undefined) {
						return that.myRegions;
					} else {
						that.myRegions = indexMap;
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
/*
				this.regionID = function(e) {
					if (e === undefined) {
						return myRegionID;
					} else {
						myRegionID = e;
						return this;
					}
				};
				this.regionPercent = function(e) {
					if (e === undefined) {
						return myRegionPercent;
					} else {
						myRegionPercent = e;
						return this;
					}
					if ((myRegionID !== undefined)
							&& (myRegionPercent !== undefined)
							&& (myRegionID.length > 0)
							&& (myRegionPercent.length > 0)) {
						this.fillRegionByPercent(myRegionID,
								myRegionPercent);
						myRegionID = "";
						myRegionPercent = "";
					}
				};
				this.updateRegion = function() {
					if ((myRegionID !== undefined)
							&& (myRegionPercent !== undefined)
							&& (myRegionID.length > 0)
							&& (myRegionPercent.length > 0)) {
						this.fillRegionByPercent(myRegionID,
								myRegionPercent);
						myRegionID = "";
						myRegionPercent = "";
					}
				};
*/
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
				/**
				 * Changes a specific region color
				 */
				this.fillRegionByPercent = function(regionID,
						regionPercent) {
					//alert("fillRegionByPercent");
					var element = this.$()[0];
					//alert(element.id);
					var dom = element.ownerDocument;
					element = dom.getElementById(regionID);
					//alert(element.id);
					var regionColor = 'none';
					if (regionPercent >= this.myUpperLimit) {
						regionColor = lowerColor;
					} else if (regionPercent <= this.myLowerLimit) {
						regionColor = upperColor;
					} else {
						regionColor = midColor;
					}
					element.setAttribute('style', 'fill:'
							+ regionColor
							+ ';stroke:#000000;stroke-width:1');
					return true;
				};
			}

			Component
					.subclass(
							"com.github.jearn.svg.regionmap.SVGRegionmap",
							SVGRegionmap);
		});
