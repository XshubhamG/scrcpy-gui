import { useMemo, useState } from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Switch, Text, View } from 'react-native';
import { Camera, DeviceMobileCamera, MonitorPlay, WifiHigh } from 'phosphor-react-native';
import { StatusBar } from 'expo-status-bar';
import { FeatureCard } from './src/components/FeatureCard';
import { pastel } from './src/theme/colors';

type MirrorState = 'Disconnected' | 'Ready to mirror' | 'Mirroring live';

export default function App() {
  const [screenMirrorOn, setScreenMirrorOn] = useState(false);
  const [cameraMirrorOn, setCameraMirrorOn] = useState(false);
  const [wirelessEnabled, setWirelessEnabled] = useState(true);

  const screenStatus: MirrorState = useMemo(
    () => (screenMirrorOn ? 'Mirroring live' : wirelessEnabled ? 'Ready to mirror' : 'Disconnected'),
    [screenMirrorOn, wirelessEnabled],
  );

  const cameraStatus: MirrorState = useMemo(
    () => (cameraMirrorOn ? 'Mirroring live' : wirelessEnabled ? 'Ready to mirror' : 'Disconnected'),
    [cameraMirrorOn, wirelessEnabled],
  );

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar style="dark" />
      <ScrollView contentContainerStyle={styles.content}>
        <View style={styles.header}>
          <Text style={styles.title}>scrcpy pastel console</Text>
          <Text style={styles.subtitle}>Mirror Android display and camera feeds with a soft, distraction-free UI.</Text>
        </View>

        <View style={styles.connectionCard}>
          <View style={styles.connectionTitleRow}>
            <WifiHigh size={20} color={pastel.textPrimary} weight="fill" />
            <Text style={styles.connectionTitle}>Connection profile</Text>
          </View>
          <View style={styles.connectionToggleRow}>
            <Text style={styles.connectionLabel}>Wireless ADB enabled</Text>
            <Switch
              value={wirelessEnabled}
              onValueChange={setWirelessEnabled}
              trackColor={{ false: '#D8D3E6', true: pastel.lavender }}
              thumbColor="#FFFFFF"
            />
          </View>
        </View>

        <FeatureCard
          icon={<MonitorPlay size={24} color={pastel.textPrimary} weight="duotone" />}
          title="Android Screen Mirroring"
          description="Stream and control your Android display using scrcpy."
          status={screenStatus}
          accentColor={pastel.sky}
          secondaryLabel="Device list"
          primaryLabel={screenMirrorOn ? 'Stop mirror' : 'Start mirror'}
          onSecondaryAction={() => setScreenMirrorOn(false)}
          onPrimaryAction={() => {
            if (!wirelessEnabled) return;
            setScreenMirrorOn((prev) => !prev);
          }}
        />

        <FeatureCard
          icon={<DeviceMobileCamera size={24} color={pastel.textPrimary} weight="duotone" />}
          title="Camera Mirroring"
          description="Mirror front or rear Android camera feed in real time."
          status={cameraStatus}
          accentColor={pastel.mint}
          secondaryLabel="Camera source"
          primaryLabel={cameraMirrorOn ? 'Stop camera' : 'Start camera'}
          onSecondaryAction={() => setCameraMirrorOn(false)}
          onPrimaryAction={() => {
            if (!wirelessEnabled) return;
            setCameraMirrorOn((prev) => !prev);
          }}
        />

        <View style={styles.previewCard}>
          <View style={styles.previewHeader}>
            <Camera size={20} color={pastel.textPrimary} weight="duotone" />
            <Text style={styles.previewTitle}>Live preview panel</Text>
          </View>
          <Text style={styles.previewText}>
            {screenMirrorOn || cameraMirrorOn
              ? 'Live transport active. Bridge this UI with your local scrcpy command runner to render the selected stream.'
              : 'Start Android screen or camera mirroring to show stream metadata and frame stats here.'}
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: pastel.background,
  },
  content: {
    padding: 18,
    gap: 14,
  },
  header: {
    paddingVertical: 8,
    gap: 6,
  },
  title: {
    fontSize: 28,
    fontWeight: '800',
    color: pastel.textPrimary,
    textTransform: 'capitalize',
  },
  subtitle: {
    color: pastel.textSecondary,
    fontSize: 14,
    lineHeight: 20,
  },
  connectionCard: {
    backgroundColor: pastel.surface,
    borderRadius: 18,
    borderColor: pastel.border,
    borderWidth: 1,
    padding: 14,
    gap: 10,
  },
  connectionTitleRow: {
    flexDirection: 'row',
    gap: 8,
    alignItems: 'center',
  },
  connectionTitle: {
    fontWeight: '700',
    fontSize: 16,
    color: pastel.textPrimary,
  },
  connectionToggleRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  connectionLabel: {
    color: pastel.textSecondary,
    fontWeight: '600',
  },
  previewCard: {
    backgroundColor: pastel.peach,
    borderRadius: 18,
    padding: 14,
    gap: 8,
  },
  previewHeader: {
    flexDirection: 'row',
    gap: 8,
    alignItems: 'center',
  },
  previewTitle: {
    color: pastel.textPrimary,
    fontWeight: '700',
  },
  previewText: {
    color: pastel.textPrimary,
    lineHeight: 20,
  },
});
