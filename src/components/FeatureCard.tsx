import { ReactNode } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { pastel } from '../theme/colors';

type FeatureCardProps = {
  icon: ReactNode;
  title: string;
  description: string;
  status: string;
  accentColor: string;
  onPrimaryAction: () => void;
  onSecondaryAction: () => void;
  primaryLabel: string;
  secondaryLabel: string;
};

export function FeatureCard({
  icon,
  title,
  description,
  status,
  accentColor,
  onPrimaryAction,
  onSecondaryAction,
  primaryLabel,
  secondaryLabel,
}: FeatureCardProps) {
  return (
    <View style={[styles.card, { borderColor: accentColor }]}> 
      <View style={styles.headerRow}>
        <View style={[styles.iconWrap, { backgroundColor: accentColor }]}>{icon}</View>
        <View style={styles.headerTextWrap}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.description}>{description}</Text>
        </View>
      </View>
      <View style={styles.statusRow}>
        <Text style={styles.statusLabel}>Status</Text>
        <Text style={styles.statusValue}>{status}</Text>
      </View>
      <View style={styles.actionsRow}>
        <Pressable style={styles.secondaryButton} onPress={onSecondaryAction}>
          <Text style={styles.secondaryButtonText}>{secondaryLabel}</Text>
        </Pressable>
        <Pressable style={[styles.primaryButton, { backgroundColor: accentColor }]} onPress={onPrimaryAction}>
          <Text style={styles.primaryButtonText}>{primaryLabel}</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    borderWidth: 2,
    borderRadius: 20,
    backgroundColor: pastel.surface,
    padding: 16,
    gap: 14,
    shadowColor: '#2E2A3B',
    shadowOpacity: 0.08,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 6 },
    elevation: 3,
  },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  iconWrap: {
    width: 48,
    height: 48,
    borderRadius: 14,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerTextWrap: {
    flex: 1,
    gap: 2,
  },
  title: {
    fontSize: 18,
    fontWeight: '700',
    color: pastel.textPrimary,
  },
  description: {
    fontSize: 13,
    color: pastel.textSecondary,
  },
  statusRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: pastel.border,
    paddingHorizontal: 12,
    paddingVertical: 8,
    backgroundColor: '#FCFAFF',
  },
  statusLabel: {
    color: pastel.textSecondary,
    fontSize: 13,
  },
  statusValue: {
    color: pastel.textPrimary,
    fontWeight: '600',
    fontSize: 13,
  },
  actionsRow: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    gap: 10,
  },
  secondaryButton: {
    borderColor: pastel.border,
    borderWidth: 1,
    borderRadius: 12,
    paddingHorizontal: 14,
    paddingVertical: 10,
    backgroundColor: '#FAF8FF',
  },
  secondaryButtonText: {
    color: pastel.textPrimary,
    fontWeight: '600',
  },
  primaryButton: {
    borderRadius: 12,
    paddingHorizontal: 14,
    paddingVertical: 10,
  },
  primaryButtonText: {
    color: '#1F1B2D',
    fontWeight: '700',
  },
});
