import React from "react";
import { SafeAreaView, ScrollView, View, StyleSheet, Text } from "react-native";
import { Button, Icon, IconProps, ApplicationProvider } from "@ui-kitten/components";
import Settings from "@/components/mycustom/atoms/Settings";
import CardSimple from "@/components/mycustom/atoms/Card";
import OptionButton from "@/components/mycustom/atoms/OptionButton";
import DarkModeIcon from "@/components/mycustom/atoms/DarkMode";
import HeaderProfile from "@/components/mycustom/molecules/Header";
import { LinearGradient } from "expo-linear-gradient";
import * as eva from "@eva-design/eva";
import { useLocalSearchParams } from "expo-router";

const SearchIcon = (props: IconProps) => <Icon name="search-outline" {...props} />;
const FileTextIcon = (props: IconProps) => <Icon name="file-text-outline" {...props} />;
const UploadIcon = (props: IconProps) => <Icon name="upload-outline" {...props} />;

export default function HomeScreen() {
  const { username } = useLocalSearchParams();

  return (
    <ApplicationProvider {...eva} theme={eva.light}>
      <LinearGradient colors={['#ffffff', '#c4d3ff']} style={{ flex: 1 }}>
        <SafeAreaView style={styles.homePage}>
          <HeaderProfile />
          <ScrollView style={styles.scrollView}>
            <View style={styles.greetingLayout}>
              <Text style={styles.headerText}>
                Hello {username || "Guest"}!{"\n"}Need help{" "}
                <Text style={styles.highlightedText}>Simplifying</Text>{"\n"}a form today?
              </Text>
            </View>

            {/* Button Section */}
            <View style={styles.buttonSection}>
              <View style={styles.buttonGroup}>
                <View style={styles.option}>
                  <OptionButton title="Browse" icon={SearchIcon} destination="Folder" />
                  <Text style={styles.optionText}>Browse</Text>
                </View>
                <View style={styles.option}>
                  <OptionButton title="Scan" icon={FileTextIcon} destination="Camera" />
                  <Text style={styles.optionText}>Scan</Text>
                </View>
                <View style={styles.option}>
                  <OptionButton title="Upload" icon={UploadIcon} destination="Camera" />
                  <Text style={styles.optionText}>Upload</Text>
                </View>
              </View>
            </View>

            {/* Form Grid */}
            <View style={styles.formGrid}>
              <CardSimple title="Canadian Pension Plan" />
              <CardSimple title="Medical Form" />
            </View>

            {/* Recent Forms Section */}
            <View style={styles.recentForm}>
              <Text style={styles.headline}>My Recent Forms</Text>
              <View style={styles.recentContent}>
                <View style={styles.formContainer}>
                  <CardSimple title="Canadian Pension Plan" />
                  <CardSimple title="Medical Form" />
                </View>
                <Button style={styles.buttonResent}>View My Form Library</Button>
              </View>
            </View>
          </ScrollView>
        </SafeAreaView>
      </LinearGradient>
    </ApplicationProvider>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: 'transparent',
    minHeight: '100%',
    marginHorizontal: 5,
  },
  greetingLayout: {
    backgroundColor: 'transparent',
    padding: 20,
    width: '100%',
  },
  headerText: {
    fontSize: 32,
    fontFamily: 'Inter_400Regular',
    color: '#08415C',
  },
  highlightedText: {
    fontFamily: 'Inter_800ExtraBold',
    color: '#2E8BB7',
  },
  buttonSection: {
    flex: 1,
    textAlign: 'right',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    padding: 20,
    backgroundColor: 'transparent',
    borderBottomColor: 'white',
    borderBottomWidth: 2,
  },
  buttonGroup: {
    flexDirection: 'row',
    backgroundColor: 'transparent',
  },
  option: {
    flexDirection: 'column',
    backgroundColor: 'transparent',
  },
  optionText: {
    textAlign: 'center',
    color: '#2E8BB7',
    fontFamily: 'Inter_300Light',
    fontSize: 16,
  },
  homePage: {
    flex: 1,
    backgroundColor: 'transparent',
    height: '100%',
  },
  formGrid: {
    flexDirection: 'row',
    paddingTop: 10,
    justifyContent: 'space-around',
    width: '100%',
  },
  recentForm: {
    width: '100%',
    height: 400,
    paddingTop: 30,
    marginTop: 40,
    backgroundColor: 'rgba(8, 65, 92, 0.80)',
    borderTopLeftRadius: 32,
    borderTopRightRadius: 32,
  },
  recentContent: {
    alignItems: 'center',
    backgroundColor: 'transparent',
    paddingTop: 20,
    width: '100%',
  },
  headline: {
    color: '#ffffff',
    fontSize: 24,
    paddingLeft: 20,
  },
  buttonResent: {
    width: '95%',
    height: 60,
    borderRadius: 32,
    backgroundColor: '#08415C',
    fontSize: 20,
    textAlign: 'center',
    marginTop: 20,
    marginLeft: 10,
    marginRight: 10,
  },
  formContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: 'transparent',
    gap: 10,
    marginVertical: 10,
  },
});

