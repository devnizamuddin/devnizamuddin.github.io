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

  //******************************** AppBar Theme ********************************

  appBarTheme: const AppBarTheme(
    backgroundColor: PRIMARY_COLOR,
    foregroundColor: Colors.white,
  ),

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
