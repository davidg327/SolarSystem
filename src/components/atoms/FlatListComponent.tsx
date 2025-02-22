import React from 'react';
import {FlatList, ListRenderItem, ViewStyle} from 'react-native';

interface IFlatListComponent {
  list: any[];
  renderItem: ListRenderItem<any>;
  style?: ViewStyle;
  empty?: React.ReactComponentElement<any>;
  contentStyle?: ViewStyle;
}

export const FlatListComponent = ({
  list,
  renderItem,
  style,
  empty,
  contentStyle,
}: IFlatListComponent) => {
  return (
    <FlatList
      data={list}
      renderItem={renderItem}
      style={style}
      contentContainerStyle={contentStyle}
      keyExtractor={(item) => item.id}
      ListEmptyComponent={empty}
      showsVerticalScrollIndicator={false}
    />
  );
};
