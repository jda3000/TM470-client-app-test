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
        <Text style={styles.sectionTitle}>TM470</Text>
        <Text>React Native Technology Demonstration Application</Text>
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
  sectionTitle: {
    fontSize: 24,
    fontWeight: "600",
  },
  mapContainer: {
    flex: 9,
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});

export default App;
