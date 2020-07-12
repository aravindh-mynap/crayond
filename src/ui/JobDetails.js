import React from 'react';
import {
    SafeAreaView,
    ScrollView,
    View,
    TouchableOpacity,
    TouchableHighlight,
    Text,
    Image,
} from 'react-native';
import Apple from "../images/apple.png"
import Arrow from "../images/double-chevron.png"

class JobDetails extends React.Component {
    render() {

        /* NOT MOVING STYLES ARE STYLE JS ONLY APPLY DASHBOARD */

        return (
            <ScrollView>
                <View style={{ flex: 1 }}>
                    <View style={{ flexDirection: "row", padding: 15 }}>
                        <View style={{ flex: 1 }}>
                            <TouchableHighlight onPress={()=>{
                                this.props.navigation.navigate("Dashboard")
                            }} >
                                <Image
                                    style={{ width: 40, height: 30, resizeMode: "cover" }}
                                    source={{
                                        uri: 'https://cdn3.iconfinder.com/data/icons/mobile-friendly-ui/100/back_arrow-512.png',
                                    }}
                                />
                            </TouchableHighlight>
                        </View>
                        <View style={{ flex: 8, paddingTop : 5 }}>
                            <Text style={{ textAlign : "center", fontSize: 18, fontWeight: "bold", letterSpacing: 0.5  }}> Job Detail </Text>
                        </View>
                        <View style={{ flex: 1, paddingTop : 5 }}>
                            <Image
                                style={{ width: 18, height: 18, resizeMode: "contain" }}
                                source={{
                                    uri: 'https://www.clipartmax.com/png/middle/473-4737744_bookmark-png-clipart-bookmark-icon-instagram.png',
                                }}
                            />
                        </View>
                    </View>
                    <View style={{  flexDirection: "row", padding: 25, paddingTop: 20,  height: 220 }}>
                        <View style={{ flex: 1,  height: 220, borderRadius: 20, backgroundColor: "#4e37b2", borderWidth: 0.5, borderColor: "#4f3cde"}}>
                            <View style={{ flexDirection: "row" }}>
                                <View style={{ flex: 3, paddingTop: 20, paddingLeft: 20 }}>
                                    <View style={{ backgroundColor: "#44309b", width: "90%", height: 80, borderRadius : 20,  textAlign: "center", justifyContent: "center", alignItems: "center", alignSelf: "center" }}>
                                        <Image
                                            style={{ width: 40, height: 40, resizeMode: "contain", backgroundColor: "transparent" }}
                                            source={Apple}
                                        />
                                    </View>
                                </View>
                                <View style={{ flex: 7, paddingTop: 25, paddingLeft: 15 }}>
                                    <Text style={{ textAlign: "center", width : 50,padding: 5, backgroundColor: "#5742b6", color: "orange", borderRadius: 10 }}>
                                        Apple
                                    </Text>
                                    <Text style={{ letterSpacing : 0.5, fontSize: 15, color: "#fff", fontWeight: "bold", paddingTop: 15 }}>
                                        Product Designer
                                    </Text>
                                    <Text style={{ letterSpacing : 0.5, fontSize: 13, color: "#9283cf", paddingTop: 3 }}>
                                        Chennai, TN
                                    </Text>
                                </View>
                            </View>
                            <View style={{ flexDirection: "row", paddingTop: 20, paddingLeft: 20, paddingRight: 20 }}>
                                <View style={{ flex: 1, flexDirection: "row", backgroundColor: "#604bb9", height: 75, borderRadius: 10 }}>
                                    <View style={{ flex: 4.5, padding: 15 }}>
                                        <Text style={{ letterSpacing : 0.5, fontSize: 13, color: "#9283cf", paddingTop: 3 }}>
                                            Type
                                        </Text>
                                        <Text style={{ letterSpacing : 0.5, fontSize: 15, color: "#fff", fontWeight: "bold", paddingTop: 2 }}>
                                            Full-Time
                                        </Text>
                                    </View>
                                    <View style={{ flex: 0.2, justifyContent: "center" }}>
                                        <View style={{ width : 2, height: 25, backgroundColor: "#8c7fb5" }}>
                                        </View>
                                    </View>
                                    <View style={{ flex: 5.3, padding: 15 }}>
                                        <Text style={{ letterSpacing : 0.5, fontSize: 13, color: "#9283cf", paddingTop: 3 }}>
                                            Experience
                                        </Text>
                                        <Text style={{ letterSpacing : 0.5, fontSize: 15, color: "#fff", fontWeight: "bold", paddingTop: 2 }}>
                                            3+ Years
                                        </Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>
                    <View style={{ flexDirection: "row", padding: 25, paddingTop: 50 }}>
                        <View style={{ flex: 1 }}>
                            <Image
                                style={{ width: 20, height: 20, resizeMode: "contain" }}
                                source={{
                                    uri: 'https://icon-library.com/images/description-icon/description-icon-11.jpg',
                                }}
                            />
                        </View>
                        <View style={{ flex: 9 }}>
                            <Text style={{ fontWeight : "bold", letterSpacing: 0.5 }}>DESCRIPTION </Text>
                            <Text style={{ paddingTop: 10, paddingLeft: 3, color: "#878691", letterSpacing: 0.5 }}>
                                We are looking for intelligent,
                            </Text>
                            <Text style={{ paddingTop: 10, paddingLeft: 3, color: "#878691", letterSpacing: 0.5 }}>
                                innovative, and hardworking people
                            </Text>
                            <Text style={{ paddingTop: 10, paddingLeft: 3, color: "#878691", letterSpacing: 0.5 }}>
                                who can add value as UI/Ux designer.
                            </Text>
                        </View>
                    </View>
                    <View style={{ flexDirection: "row", padding: 25, paddingTop: 5 }}>
                        <View style={{ flex: 1 }}>
                            <Image
                                style={{ width: 20, height: 18, resizeMode: "contain" }}
                                source={{
                                    uri: 'https://static.thenounproject.com/png/542377-200.png',
                                }}
                            />
                        </View>
                        <View style={{ flex: 9 }}>
                            <Text style={{ fontWeight : "bold", letterSpacing: 0.5 }}>RESPONSIBIITY </Text>
                            <Text style={{ paddingTop: 10, paddingLeft: 3, color: "#878691", letterSpacing: 0.5 }}>
                                <Image
                                    style={{ width: 10, height: 10, resizeMode: "contain" }}
                                    source={Arrow}
                                />
                                <Text style={{ marginLeft: 10 }}>    Conduct user resurch</Text>
                            </Text>
                            <Text style={{ paddingTop: 10, paddingLeft: 3, color: "#878691", letterSpacing: 0.5 }}>
                                <Image
                                    style={{ width: 10, height: 10, resizeMode: "contain" }}
                                    source={Arrow}
                                />
                                <Text style={{ marginLeft: 10 }}>    Visual designing, Wireframing</Text>
                            </Text>
                            <Text style={{ paddingTop: 10, paddingLeft: 3, color: "#878691", letterSpacing: 0.5 }}>
                                <Image
                                    style={{ width: 10, height: 10, resizeMode: "contain" }}
                                    source={Arrow}
                                />
                                <Text style={{ marginLeft: 10 }}>    Build to class experience </Text>
                            </Text>
                        </View>
                    </View>
                    <View style={{ flexDirection: "row", padding: 25, paddingTop: 5, paddingBottom: 10 }}>
                        <View style={{ flex: 1 }}>
                            <Image
                                style={{ width: 20, height: 18, resizeMode: "contain" }}
                                source={{
                                    uri: 'https://cdn0.iconfinder.com/data/icons/seo-development-services-line/614/3273_-_Brainstorming-512.png',
                                }}
                            />
                        </View>
                        <View style={{ flex: 9 }}>
                            <Text style={{ fontWeight : "bold", letterSpacing: 0.5 }}>SKILLS </Text>
                        </View>
                    </View>
                    <View style={{ flexDirection: "row", padding: 25, paddingLeft: 50, paddingTop: 0 }}>
                        <View style={{ borderRadius: 10, padding: 10, backgroundColor: "#f5f5f5", textAlign: "center" }}>
                            <Text style={{ color: "#878691", letterSpacing: 0.5 }}>UI/UX Design</Text>
                        </View>
                        <View><Text>{"     "}</Text></View>
                        <View style={{ borderRadius: 10, padding: 10, backgroundColor: "#f5f5f5", textAlign: "center" }}>
                            <Text style={{ color: "#878691", letterSpacing: 0.5 }}>Research</Text>
                        </View>
                        <View><Text>{"     "}</Text></View>
                        <View style={{ borderRadius: 10, padding: 10, backgroundColor: "#f5f5f5", textAlign: "center" }}>
                            <Text style={{ color: "#878691", letterSpacing: 0.5 }}>Sketch</Text>
                        </View>
                    </View>
                    <View style={{ flexDirection: "row", padding: 25, paddingTop: 15 }}>
                        <TouchableHighlight onPress={()=> {}} style={{ flex: 1,borderRadius: 10, padding: 15, backgroundColor: "#4e37b2" }}>
                            <Text style={{ fontSize: 18,  textAlign: "center",  color: "#fff", fontWeight: "bold" }}>
                                APPLLY NOW
                            </Text>
                        </TouchableHighlight>
                    </View>
                </View>
            </ScrollView>
        );
    }
}
export default JobDetails;
