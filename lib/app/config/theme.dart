import 'package:flutter/material.dart';
import 'color.dart';

const OutlineInputBorder ENABLED_BORDER = OutlineInputBorder(
  borderSide: BorderSide(width: 1, color: ENABLED_BORDER_COLOR),
);
const OutlineInputBorder FOCUSED_BORDER = OutlineInputBorder(
  borderSide: BorderSide(width: 1, color: FOCUSED_BORDER_COLOR),
);
const OutlineInputBorder ERROR_BORDER = OutlineInputBorder(
  borderSide: BorderSide(width: 1, color: ERROR_BORDER_COLOR),
);
const OutlineInputBorder FOCUSED_ERROR_BORDER = OutlineInputBorder(
  borderSide: BorderSide(width: 1, color: FOCUSED_ERROR_BORDER_COLOR),
);

final ThemeData lightTheme = ThemeData(
  primaryColor: PRIMARY_COLOR,
  scaffoldBackgroundColor: SCAFFOLD_BACKGROUND_COLOR,
  outlinedButtonTheme: OutlinedButtonThemeData(
    style: OutlinedButton.styleFrom(
      foregroundColor: Colors.white,
    ),
  ),
  textTheme: TextTheme(
    // Large headings, ideal for page titles or sections
    displayLarge: const TextStyle(
      fontSize: 48, // Larger font for web
      fontWeight: FontWeight.bold,
      color: Colors.black,
    ),
    // Medium headings, for subtitles or secondary headings
    displayMedium: const TextStyle(
      fontSize: 36,
      fontWeight: FontWeight.bold,
      color: Colors.black87,
    ),
    // Small headings, useful for tertiary headings
    displaySmall: const TextStyle(
      fontSize: 28,
      fontWeight: FontWeight.w600,
      color: Colors.black87,
    ),
    // For cards, list titles, or emphasized content
    headlineMedium: const TextStyle(
      fontSize: 22,
      fontWeight: FontWeight.w500,
      color: Colors.black54,
    ),
    // Used for small emphasized text, like input labels
    titleMedium: const TextStyle(
      fontSize: 18,
      fontWeight: FontWeight.w400,
      color: Colors.black54,
    ),
    // Default body text, used for most content
    // Caption text, like for images or minor content
    bodySmall: const TextStyle(
      fontSize: 12,
      fontWeight: FontWeight.w400,
      color: Colors.white,
    ),
    // Smaller body text, often for captions or helper text
    bodyMedium: const TextStyle(
      fontSize: 14,
      fontWeight: FontWeight.normal,
      color: Colors.white,
    ),
    // Used for buttons
    bodyLarge: const TextStyle(
      fontSize: 16,
      fontWeight: FontWeight.normal,
      color: Colors.white,
    ),
    labelLarge: const TextStyle(
      fontSize: 16,
      fontWeight: FontWeight.bold,
      color: Colors.white,
    ),
    // Overline text, typically uppercase and small
    labelSmall: TextStyle(
      fontSize: 10,
      fontWeight: FontWeight.w400,
      color: Colors.grey[600],
    ),
  ),
  //******************************** AppBar Theme ********************************

  appBarTheme: const AppBarTheme(
    backgroundColor: PRIMARY_COLOR,
    foregroundColor: Colors.white,
  ),
  iconTheme: const IconThemeData(color: Colors.white),
  //******************************** InputDecoration Theme ********************************
  inputDecorationTheme: const InputDecorationTheme(
    enabledBorder: ENABLED_BORDER,
    focusedBorder: FOCUSED_BORDER,
    errorBorder: ERROR_BORDER,
    focusedErrorBorder: FOCUSED_ERROR_BORDER,
  ),

  //******************************** Checkbox Theme ********************************

  checkboxTheme: CheckboxThemeData(
    fillColor: WidgetStateProperty.resolveWith<Color?>(
      (Set<WidgetState> states) {
        if (states.contains(WidgetState.selected)) {
          return PRIMARY_DARK_COLOR;
        }

        return Colors.white;
      },
    ),
    checkColor: WidgetStateProperty.all<Color>(Colors.white),
    side: WidgetStateBorderSide.resolveWith(
      (Set<WidgetState> states) {
        if (states.contains(WidgetState.selected)) {
          return const BorderSide(color: Colors.transparent, width: 2);
        }
        return const BorderSide(color: PRIMARY_DARK_COLOR, width: 2);
      },
    ),
  ),
  radioTheme: RadioThemeData(
    fillColor: WidgetStateProperty.resolveWith<Color>(
      (Set<WidgetState> states) {
        if (states.contains(WidgetState.selected)) {
          return ACCENT_COLOR;
        }
        return Colors.grey;
      },
    ),
  ),
);

final ThemeData dartkTheme = ThemeData(
  brightness: Brightness.dark,
);
