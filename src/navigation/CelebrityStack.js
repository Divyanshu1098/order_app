import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { useSelector } from 'react-redux';
import {
  BrandProducts,
  BuyProduct,
  Celebrity,
  Celebrity2,
  CelebrityProduct,
  CelebrityProduct2,
  Delivery,
  Filter,
  ProductDetail,
  ProductDetail2,
  ProductList,
  ProductList2,
  ProductList3,
  ProductListEcom,
  SearchProductVendorItem,
  SearchProductVendorItem3V2,
  SendProduct,
  Vendors,
  Vendors2,
  ViewAllSearchItems,
} from '../Screens';
import navigationStrings from './navigationStrings';

const Stack = createNativeStackNavigator();
export default function () {
  const { appData, appStyle } = useSelector((state) => state?.initBoot);
  const checkSearchProductVendorItemLayout = (layout) => {
    switch (appStyle?.homePageLayout) {
      case 1:
        return SearchProductVendorItem;
      case 8:
        return SearchProductVendorItem3V2;
      default:
        return SearchProductVendorItem3V2;
    }
  };

  const checkProductListLayout = () => {
    switch (appStyle?.homePageLayout) {
      case 1: return ProductList;
      case 2: return ProductList2;
      case 10: return ProductListEcom;
      default: return ProductList3;
    }
  };

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen
        name={navigationStrings.CELEBRITY}
        component={
          appStyle?.homePageLayout === 3 ||
            appStyle?.homePageLayout === 5 ||
            appStyle?.homePageLayout === 8
            ? Celebrity2
            : Celebrity
        }
      />
      <Stack.Screen
        name={navigationStrings.CELEBRITYDETAIL}
        component={
          appStyle?.homePageLayout === 3 || appStyle?.homePageLayout === 5
            ? CelebrityProduct2
            : CelebrityProduct
        }
      />

      <Stack.Screen
        name={navigationStrings.SEARCHPRODUCTOVENDOR}
        component={checkSearchProductVendorItemLayout()}
      />

      <Stack.Screen name={navigationStrings.FILTER} component={Filter} />

      <Stack.Screen
        name={navigationStrings.PRODUCTDETAIL}
        component={
          appStyle?.homePageLayout === 2 ? ProductDetail2 : ProductDetail
        }
      />

      <Stack.Screen
        name={navigationStrings.BRANDDETAIL}
        component={BrandProducts}
      />

      <Stack.Screen
        name={navigationStrings.SEND_PRODUCT}
        component={SendProduct}
      />
      <Stack.Screen
        name={navigationStrings.BUY_PRODUCT}
        component={BuyProduct}
      />

      <Stack.Screen
        name={navigationStrings.VENDOR}
        component={appStyle?.homePageLayout === 2 ? Vendors2 : Vendors}
      />

      <Stack.Screen name={navigationStrings.DELIVERY} component={Delivery} />

      <Stack.Screen
        name={navigationStrings.PRODUCT_LIST}
        component={checkProductListLayout()}
      />

      <Stack.Screen
        name={navigationStrings.VIEW_ALL_SEARCH_ITEM}
        component={ViewAllSearchItems}
      />
    </Stack.Navigator>
  );
}
