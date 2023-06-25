import { View, StyleSheet } from "react-native";
import MapView, { Marker } from "react-native-maps";

const MapScreen = ({route}) => <View style={styles.container}>
    <MapView
        style={styles.mapStyle}
        region={{
            latitude: route.params.latitude,
            longitude: route.params.longitude,
            latitudeDelta: 0.1,
            longitudeDelta: 0.1,
        }}
        mapType="standard"
        minZoomLevel={15}
    >
        <Marker
            title={route.params.title}
            coordinate={{
                latitude: route.params.latitude,
                longitude: route.params.longitude,
            }}
        />
    </MapView>
</View>;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
    mapStyle: {
        width: "100%",
        height: "100%",
    },
});

export default MapScreen;