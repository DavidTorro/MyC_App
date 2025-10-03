import 'package:flutter/material.dart';
import 'package:myc_app/app/theme/app_palette.dart';

enum AppButtonVariant { primary, secondary, danger }
enum AppButtonSize { small, medium, large }

class AppButton extends StatelessWidget {
  final String label;
  final VoidCallback? onPressed;
  final AppButtonVariant variant;
  final TextStyle? textStyleOverride;
  final Color? borderColor;
  final double borderWidth;
  final double borderRadius;
  final AppButtonSize size;

  /// Overrides opcionales por si queremos forzar colores puntuales.
  final Color? backgroundColorOverride;
  final Color? foregroundColorOverride;

  const AppButton({
    super.key,
    required this.label,
    required this.onPressed,
    this.variant = AppButtonVariant.primary,
    this.backgroundColorOverride,
    this.foregroundColorOverride,
    this.textStyleOverride,
    this.borderColor,
    this.borderWidth = 1.5,
    this.borderRadius = 7.0,
    this.size = AppButtonSize.small,
  });

  @override
  Widget build(BuildContext context) {
    final palette = appPaletteOf(context);

    final (bg, fg,border) = switch (variant) {
      AppButtonVariant.primary => (palette.primary, palette.onPrimary, Colors.transparent),
      AppButtonVariant.secondary => (palette.secondary, palette.onSecondary, palette.primary),
      AppButtonVariant.danger => (palette.danger, palette.onDanger, Colors.transparent),
    };

    final (btnWidth, btnHeight) = switch (size) {
      AppButtonSize.small => (80.0, 50.0),
      AppButtonSize.medium => (100.0, 60.0),
      AppButtonSize.large => (150.0, 70.0),
    };

    return ElevatedButton(
      style: ElevatedButton.styleFrom(
        backgroundColor: backgroundColorOverride ?? bg,
        foregroundColor: foregroundColorOverride ?? fg,
        fixedSize: Size(btnWidth, btnHeight),
        padding: const EdgeInsets.symmetric(horizontal: 0, vertical: 0),
        textStyle: textStyleOverride ??
        const TextStyle(
          fontSize: 16,
          fontWeight: FontWeight.bold,
        ),
        shape: RoundedRectangleBorder(
        borderRadius: BorderRadius.circular(borderRadius),
        side: BorderSide(
          color: borderColor ?? border,
          width: borderColor != null ? borderWidth : (variant == AppButtonVariant.secondary ? 3 : 0),
        ),
      ),
      ),
      onPressed: onPressed,
      child: Text(label),
    );
  }
}
