import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
    container: {
        padding: 16,
        paddingTop: 50,
        display: "flex",
        flex: 1,
        justifyContent: "space-between"
    },
    title: {
        fontSize: 34,
        marginTop: 50,
        fontWeight: "500",
    },
    subTitle: {
        fontSize: 20,
        marginBottom: 40,
        color: "#858585",
    },
    input: {
        width: "100%",
        borderWidth: 1,
        padding: 10,
        marginBottom: 16,
        borderRadius: 6,
        borderColor: "#d3d3d3",
    },
    button: {
        padding: 12,
        borderRadius: 6,

        textAlign: "center"
    },
    buttonText: {
        textAlign: "center",
        color: "#ffffff",
        textTransform: "uppercase",
        fontWeight: "bold"
    },
    enabled: {
        backgroundColor: "#e5a36a",
    },
    disabled: {
        backgroundColor: "#d3d3d3",
        color: "#858585"
    }
});

export default styles;