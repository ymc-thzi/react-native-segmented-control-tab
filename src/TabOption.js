/* @flow */

import React, { PureComponent } from 'react'
import {
  View,
  TouchableOpacity,
  StyleSheet,
  Text,
} from 'react-native'


import type {
  ViewStyleProp,
  TextStyleProp,
} from 'react-native/Libraries/StyleSheet/StyleSheet'

type Props = {
  isTabActive?: boolean,
  index?: number,
  badge?: any,
  iconComponent?: any,
  text: string,
  viewMode: string,
  firstTabStyle?: ViewStyleProp,
  lastTabStyle?: ViewStyleProp,
  tabStyle?: ViewStyleProp,
  columnModeTabStyle: ViewStyleProp,
  activeTabStyle?: ViewStyleProp,
  tabTextStyle?: TextStyleProp,
  activeTabTextStyle?: TextStyleProp,
  tabBadgeContainerStyle?: TextStyleProp,
  activeTabBadgeContainerStyle?: TextStyleProp,
  tabBadgeStyle?: TextStyleProp,
  activeTabBadgeStyle?: TextStyleProp,
  onTabPress: Function,
  textNumberOfLines?: number,
  allowFontScaling?: boolean,
  accessible?: boolean,
  activeTabOpacity?: number,
  accessibilityLabel?: string,
  testID?: string;
  enabled?: boolean,
}

const styles = StyleSheet.create({
  tabStyle: {
    paddingVertical: 5,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#0076FF',
    borderWidth: 1,
    backgroundColor: 'white',
  },
  activeTabStyle: {
    backgroundColor: '#0076FF',
  },
  tabTextStyle: {
    color: '#0076FF',
  },
  activeTabTextStyle: {
    color: 'white',
  },
  tabBadgeContainerStyle: {
    borderRadius: 20,
    backgroundColor: 'red',
    paddingLeft: 5,
    paddingRight: 5,
    marginLeft: 5,
    marginBottom: 3,
  },
  activeTabBadgeContainerStyle: {
    backgroundColor: 'white',
  },
  tabBadgeStyle: {
    color: 'white',
    fontSize: 11,
    fontWeight: 'bold',
  },
  activeTabBadgeStyle: {
    color: 'black',
  },
  columnModeTabStyle: {
    borderRightWidth: 1,
    borderLeftWidth: 1,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
  }
})

export default class TabOption extends PureComponent<Props> {
  static defaultProps = {
    isTabActive: false,
    index: 0,
    badge: '',
    iconComponent: '',
    viewMode: '',
    firstTabStyle: {},
    lastTabStyle: {},
    tabStyle: {},
    columnModeTabStyle: {},
    activeTabStyle: {},
    tabTextStyle: {},
    activeTabTextStyle: {},
    tabBadgeContainerStyle: {},
    activeTabBadgeContainerStyle: {},
    tabBadgeStyle: {},
    activeTabBadgeStyle: {},
    textNumberOfLines: 1,
    allowFontScaling: false,
    accessible: true,
    activeTabOpacity: 1,
    accessibilityLabel: '',
    testID: '',
    enabled: false,
    onTabPress: () => {},
  };

  render() {
    const {
      isTabActive,
      index,
      badge,
      iconComponent,
      text,
      viewMode,
      firstTabStyle,
      lastTabStyle,
      tabStyle,
      columnModeTabStyle,
      activeTabStyle,
      tabTextStyle,
      activeTabTextStyle,
      tabBadgeContainerStyle,
      activeTabBadgeContainerStyle,
      tabBadgeStyle,
      activeTabBadgeStyle,
      onTabPress,
      textNumberOfLines,
      allowFontScaling,
      accessible,
      activeTabOpacity,
      accessibilityLabel,
      testID,
      enabled,
    } = this.props
    return (
      <TouchableOpacity
        style={[
          styles.tabStyle,
          tabStyle,
          isTabActive ? [styles.activeTabStyle, activeTabStyle] : {},
          firstTabStyle,
          lastTabStyle,
          viewMode === 'col' && styles.columnModeTabStyle,
          viewMode === 'col' && columnModeTabStyle
        ]}
        accessible={accessible}
        testID={testID}
        accessibilityLabel={accessibilityLabel}
        accessibilityTraits={isTabActive ? 'selected' : 'button'}
        accessibilityComponentType="button"
        onPress={() => onTabPress(index)}
        disabled={!enabled}
        activeOpacity={activeTabOpacity}
      >
        <View style={[{ flexDirection: 'row' }, iconComponent ? { marginLeft: 12 } : {}]}>
          <View style={{ marginRight: 4 }}>
            {iconComponent}
          </View>
          <Text
            style={[
              styles.tabTextStyle,
              iconComponent ? { paddingRight: 12 } : {},
              tabTextStyle,
              isTabActive
                ? [styles.activeTabTextStyle, activeTabTextStyle]
                : {},
            ]}
            numberOfLines={textNumberOfLines}
            allowFontScaling={allowFontScaling}
            ellipsizeMode="tail"
          >
            {text}
          </Text>
          {Boolean(badge) && (
            <View
              style={[
                styles.tabBadgeContainerStyle,
                tabBadgeContainerStyle,
                isTabActive
                  ? [
                    styles.activeTabBadgeContainerStyle,
                    activeTabBadgeContainerStyle,
                  ]
                  : {},
              ]}
            >
              <Text
                style={[
                  styles.tabBadgeStyle,
                  tabBadgeStyle,
                  isTabActive
                    ? [styles.activeTabBadgeStyle, activeTabBadgeStyle]
                    : {},
                ]}
                allowFontScaling={allowFontScaling}
              >
                {badge}
              </Text>
            </View>
          )}
        </View>
      </TouchableOpacity>
    )
  }
}
