import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { COLORS } from '../theme/colors';

interface ScreenContainerProps {
  title?: string;
  children: React.ReactNode;
  action?: React.ReactNode;
}

export default function ScreenContainer({ title, children, action }: ScreenContainerProps) {
  return (
    <SafeAreaView style={styles.container}>
      {(title || action) && (
        <View style={styles.header}>
          {title ? <Text style={styles.title}>{title}</Text> : <View />}
          {action ? <View>{action}</View> : null}
        </View>
      )}
      <View style={styles.content}>{children}</View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  header: {
    paddingHorizontal: 20,
    paddingVertical: 18,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: COLORS.border,
    backgroundColor: COLORS.white,
  },
  title: {
    fontSize: 22,
    fontWeight: '700',
    color: COLORS.text,
  },
  content: {
    flex: 1,
    padding: 16,
  },
});
