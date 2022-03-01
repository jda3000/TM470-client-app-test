/**
 * Sample React Native App for OU TM470
 * Author: James Alexander
 * https://github.com/jda3000/TM470-client-app-test
 *
 * @format
 * @flow strict-local
 */

import React from "react";
import type { Node } from "react";
import {
  StyleSheet,
  Text,
  View,
} from "react-native";
import MapView from "react-native-maps";

const App: () => Node = () => {
  return (
    <View style={{ flex: 1, flexDirection: "column" }}>
      <View style={styles.headerSection}>
        <Text style={styles.title}>TM470</Text>
        <Text style={styles.subTitle}>
          Technology Demonstration Application
        </Text>
        <Text style={styles.author}>James Alexander</Text>
      </View>
      <View style={styles.mapContainer}>
        <MapView
          style={styles.map}
          showsUserLocation={true}
          followsUserLocation={true}
          showsMyLocationButton={true}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerSection: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    paddingTop: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "600",
  },
  subTitle: {
    fontSize: 16,
    marginTop: 5,
  },
  author: {
    fontStyle: 'italic',
    marginTop: 5,
  },
  mapContainer: {
    flex: 9,
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});

export default App;
