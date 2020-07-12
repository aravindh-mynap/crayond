import React from 'react';
import {
    SafeAreaView,
    ScrollView,
    View,
    TouchableOpacity,
    TouchableHighlight,
    TextInput,
    Text,
    Image,
} from 'react-native';
import paypal from "../images/paypal.png"
import Next from "../images/next.png"
import Apple from '../images/appleBack.png';
import insight from '../images/insight.png';
import journalist from '../images/journalist.png';
import search from '../images/search.png';
import university from '../images/university.png';
import filter from '../images/filter.png';
import filter1 from '../images/filter1.png';
import Styles from '../style/DashboardStyle';

class Dashboard extends React.Component {
    render() {
        return (
            <View>
                <ScrollView>
                    <View style={Styles.view1}>
                        <View style={Styles.view2}>
                            <View style={{ flex: 8.5 }}>
                                <Text style={Styles.name1}>
                                    Hello,
                                </Text>
                                <Text style={Styles.name2}>
                                    Stanisov.
                                </Text>
                            </View>
                            <View style={Styles.view3}>
                                <Image
                                    style={Styles.personImage}
                                    source={{
                                        uri: 'https://c.tribune.com.pk/2017/07/1468415-zayn-1501217623.jpg',
                                    }}
                                />
                                <Text style={Styles.dotStyle}>
                                </Text>
                            </View>
                        </View>
                        <View style={Styles.view4}>
                            <View style={{ flex: 8.5 }}>
                                <View style={{ paddingRight: 20 }}>
                                    <Image
                                        style={Styles.searchImage}
                                        source={{
                                            uri: 'https://img.icons8.com/all/500/search--v1.png',
                                        }}
                                    />
                                    <TextInput
                                        style={Styles.searchJobText}
                                        placeholder={"Searh for jobs"}
                                    />
                                </View>
                            </View>
                            <View style={{ flex: 1.5 }}>
                                <View style={Styles.filterBackground}>
                                    <Image
                                        style={Styles.filterImage}
                                        source={filter}
                                    />
                                </View>
                            </View>
                        </View>
                        <View style={Styles.jobText}>
                            <Text style={{ fontSize: 17, fontWeight: "bold" }}> Jobs for you: </Text>
                        </View>
                        <View style={Styles.view5}>
                            <View style={{ flex: 1,  height: 180, borderRadius: 20, backgroundColor:'#ffffff', justifyContext:'center', alignItems: 'center', width: "100%", elevation: 3 }}>
                                <View style={{ flexDirection: "row" }}>
                                    <View style={Styles.view7}>
                                        <View style={{ backgroundColor: "#f0f0f0", width: "90%", height: 80, borderRadius : 20,  textAlign: "center", justifyContent: "center", alignItems: "center", alignSelf: "center" }}>
                                            <Image
                                                style={{ width: 40, height: 40, resizeMode: "contain", backgroundColor: "transparent" }}
                                                source={Apple}
                                            />
                                        </View>
                                    </View>
                                    <View style={{ flex: 7, paddingTop: 25, paddingLeft: 15 }}>
                                        <Text style={Styles.text1}>
                                            Apple
                                        </Text>
                                        <Text style={Styles.text2}>
                                            Product Designer
                                        </Text>
                                        <Text style={Styles.text3}>
                                            Chennai, TN
                                        </Text>
                                    </View>
                                </View>
                                <View style={Styles.view8}>
                                    <View style={Styles.view9}>
                                        <View style={Styles.view10} />
                                    </View>
                                </View>
                                <View style={{ flexDirection: "row",  paddingTop : 15 }}>
                                    <View style={{ flex: 3.7}}></View>
                                    <View style={{ flex: 0.3, justifyContent: "center"}}>
                                        <Text style={Styles.daysDot}>
                                        </Text>
                                    </View>
                                    <View style={{ flex: 2, justifyContent: "center"}}>
                                        <Text style={Styles.day}>  5 days</Text>
                                    </View>
                                    <View style={{ flex: 4, justifyContent: "center" }}>
                                        <TouchableHighlight onPress={()=>{
                                            this.props.navigation.navigate("JobDetails")
                                        }} >
                                            <Text style={Styles.apply}>APPLY  <Image
                                                style={Styles.applyImage}
                                                source={Next}
                                            />
                                            </Text>
                                        </TouchableHighlight>
                                    </View>
                                </View>
                            </View>
                        </View>

                        <View style={Styles.view5}>
                            <View style={{ flex: 1,  height: 180, borderRadius: 20, backgroundColor:'#ffffff', justifyContext:'center', alignItems: 'center', width: "100%", elevation: 3 }}>
                                <View style={{ flexDirection: "row" }}>
                                    <View style={Styles.view7}>
                                        <View style={{ backgroundColor: "#fdc010", width: "90%", height: 80, borderRadius : 20,  textAlign: "center", justifyContent: "center", alignItems: "center", alignSelf: "center" }}>
                                            <Image
                                                style={{ width: 40, height: 40, resizeMode: "contain", backgroundColor: "transparent" }}
                                                source={{
                                                    uri : "https://cdn1.iconfinder.com/data/icons/data-science-outline/60/037_-_File_Processing-512.png"
                                                }}
                                            />
                                        </View>
                                    </View>
                                    <View style={{ flex: 7, paddingTop: 25, paddingLeft: 15 }}>
                                        <Text style={{ ...Styles.text1, width : 60 }}>
                                            Untappd
                                        </Text>
                                        <Text style={Styles.text2}>
                                            Graphic / Ui Designer
                                        </Text>
                                        <Text style={Styles.text3}>
                                            Bangalore, India
                                        </Text>
                                    </View>
                                </View>
                                <View style={Styles.view8}>
                                    <View style={Styles.view9}>
                                        <View style={Styles.view10} />
                                    </View>
                                </View>
                                <View style={{ flexDirection: "row",  paddingTop : 15 }}>
                                    <View style={{ flex: 3.7}}></View>
                                    <View style={{ flex: 0.3, justifyContent: "center"}}>
                                        <Text style={Styles.daysDot}>
                                        </Text>
                                    </View>
                                    <View style={{ flex: 2, justifyContent: "center"}}>
                                        <Text style={Styles.day}>  New</Text>
                                    </View>
                                    <View style={{ flex: 4, justifyContent: "center" }}>
                                        <TouchableHighlight onPress={()=>{
                                            this.props.navigation.navigate("JobDetails")
                                        }} >
                                            <Text style={Styles.apply}>APPLY  <Image
                                                style={Styles.applyImage}
                                                source={Next}
                                            />
                                            </Text>
                                        </TouchableHighlight>
                                    </View>
                                </View>
                            </View>
                        </View>

                        <View style={Styles.view5}>
                            <View style={{ flex: 1,  height: 180, borderRadius: 20, backgroundColor:'#ffffff', justifyContext:'center', alignItems: 'center', width: "100%", elevation: 3 }}>
                                <View style={{ flexDirection: "row" }}>
                                    <View style={Styles.view7}>
                                        <View style={{ backgroundColor: "#00529f", width: "90%", height: 80, borderRadius : 20,  textAlign: "center", justifyContent: "center", alignItems: "center", alignSelf: "center" }}>
                                            <Image
                                                style={{ width: 40, height: 40, resizeMode: "contain" }}
                                                source={paypal}
                                            />
                                        </View>
                                    </View>
                                    <View style={{ flex: 7, paddingTop: 25, paddingLeft: 15 }}>
                                        <Text style={Styles.text1}>
                                            Paypal
                                        </Text>
                                        <Text style={Styles.text2}>
                                            Sr. UX Designer
                                        </Text>
                                        <Text style={Styles.text3}>
                                            Chennai, TN
                                        </Text>
                                    </View>
                                </View>
                                <View style={Styles.view8}>
                                    <View style={Styles.view9}>
                                        <View style={Styles.view10} />
                                    </View>
                                </View>
                                <View style={{ flexDirection: "row",  paddingTop : 15 }}>
                                    <View style={{ flex: 3.7}}></View>
                                    <View style={{ flex: 0.3, justifyContent: "center"}}>
                                        <Text style={Styles.daysDot}>
                                        </Text>
                                    </View>
                                    <View style={{ flex: 2, justifyContent: "center"}}>
                                        <Text style={Styles.day}>  New</Text>
                                    </View>
                                    <View style={{ flex: 4, justifyContent: "center" }}>
                                        <TouchableHighlight onPress={()=>{
                                            this.props.navigation.navigate("JobDetails")
                                        }} >
                                            <Text style={Styles.apply}>APPLY  <Image
                                                style={Styles.applyImage}
                                                source={Next}
                                            />
                                            </Text>
                                        </TouchableHighlight>
                                    </View>
                                </View>
                            </View>
                        </View>

                        <View style={Styles.view5}>
                            <View style={{ flex: 1,  height: 180, borderRadius: 20, backgroundColor:'#ffffff', justifyContext:'center', alignItems: 'center', width: "100%", elevation: 3 }}>
                                <View style={{ flexDirection: "row" }}>
                                    <View style={Styles.view7}>
                                        <View style={{ backgroundColor: "red", width: "90%", height: 80, borderRadius : 20,  textAlign: "center", justifyContent: "center", alignItems: "center", alignSelf: "center" }}>
                                            <Image
                                                style={{ width: 40, height: 40, resizeMode: "contain" }}
                                                source={paypal}
                                            />
                                        </View>
                                    </View>
                                    <View style={{ flex: 7, paddingTop: 25, paddingLeft: 15 }}>
                                        <Text style={Styles.text1}>
                                            Paypal
                                        </Text>
                                        <Text style={Styles.text2}>
                                            Sr. UX Designer
                                        </Text>
                                        <Text style={Styles.text3}>
                                            Chennai, TN
                                        </Text>
                                    </View>
                                </View>
                                <View style={Styles.view8}>
                                    <View style={Styles.view9}>
                                        <View style={Styles.view10} />
                                    </View>
                                </View>
                                <View style={{ flexDirection: "row",  paddingTop : 15 }}>
                                    <View style={{ flex: 3.7}}></View>
                                    <View style={{ flex: 0.3, justifyContent: "center"}}>
                                        <Text style={Styles.daysDot}>
                                        </Text>
                                    </View>
                                    <View style={{ flex: 2, justifyContent: "center"}}>
                                        <Text style={Styles.day}>  New</Text>
                                    </View>
                                    <View style={{ flex: 4, justifyContent: "center" }}>
                                        <TouchableHighlight onPress={()=>{
                                            this.props.navigation.navigate("JobDetails")
                                        }} >
                                            <Text style={Styles.apply}>APPLY  <Image
                                                style={Styles.applyImage}
                                                source={Next}
                                            />
                                            </Text>
                                        </TouchableHighlight>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>
                </ScrollView>
                <View style={{ position: "absolute", bottom: 0, width: "100%" }}>
                    <View style={Styles.view11}>
                        <View style={{ flexDirection: "row", alignSelf: "center", paddingTop: 10, paddingBottom: 10 }}>
                            <View style={Styles.view13}>
                                <Image source={search}
                                       style={{ width: 25, height: 25, resizeMode: "contain" }}
                                />
                                <Text style={{ ...Styles.text4, color: "#262626" }}>Jobs</Text>
                            </View>
                            <View style={Styles.view13}>
                                <Image source={university}
                                       style={{ width: 25, height: 25, resizeMode: "contain" }}
                                />
                                <Text style={Styles.text4}>Academy</Text>
                            </View>
                            <View  style={{ flex :2, justifyContent: "center", alignItems: "center", marginTop: -10, elevation: 5}}>
                                <View style={Styles.view12}>
                                    <Image source={filter1}
                                           style={{ width: 25, height: 25, resizeMode: "contain" }}
                                    />
                                </View>
                            </View>
                            <View style={Styles.view13}>
                                <Image source={journalist}
                                       style={{ width: 25, height: 25, resizeMode: "contain" }}
                                />
                                <Text style={Styles.text4}>Al Desk</Text>
                            </View>
                            <View style={Styles.view13}>
                                <Image source={insight}
                                       style={{ width: 25, height: 25, resizeMode: "contain" }}
                                />
                                <Text style={Styles.text4}>Insights</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        );
    }
}
export default Dashboard;
