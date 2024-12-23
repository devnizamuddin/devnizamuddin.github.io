import 'package:devnizamuddin_github_io/app/extensions/num.dart';
import 'package:flutter/material.dart';

class NavBar extends StatelessWidget {
  const NavBar({super.key});
  @override
  Widget build(BuildContext context) {
    final navMenuGap = 40.w;
    return Row(
      children: [
        20.w,
        const Expanded(
          child: Text(
            'Dev Nizam Uddin',
            style: TextStyle(
              fontSize: 20,
              fontWeight: FontWeight.normal,
            ),
          ),
        ),
        NavMenuItem(
          onTap: () {},
          title: 'Home',
        ),
        navMenuGap,
        NavMenuItem(
          onTap: () {},
          title: 'About',
        ),
        navMenuGap,
        NavMenuItem(
          onTap: () {},
          title: 'Skills',
        ),
        navMenuGap,
        NavMenuItem(
          onTap: () {},
          title: 'Experience',
        ),
        navMenuGap,
        NavMenuItem(
          onTap: () {},
          title: 'Projects',
        ),
        navMenuGap,
        NavMenuItem(
          onTap: () {},
          title: 'Contact',
        ),
        navMenuGap,
        OutlinedButton(
            onPressed: () {},
            child: Padding(
              padding: const EdgeInsets.all(8.0),
              child: Row(
                children: [
                  const Icon(Icons.download),
                  10.w,
                  const Text(
                    'Resume',
                    style: TextStyle(
                      fontSize: 20,
                    ),
                  )
                ],
              ),
            )),
        20.w,
      ],
    );
  }
}

class NavMenuItem extends StatelessWidget {
  final String title;
  final void Function() onTap;
  final bool isSelected;

  const NavMenuItem({
    super.key,
    required this.title,
    required this.onTap,
    this.isSelected = false,
  });

  @override
  Widget build(BuildContext context) {
    return InkWell(
      onTap: onTap,
      child: Text(
        title,
        style: const TextStyle(
          fontSize: 20,
          fontWeight: FontWeight.normal,
        ),
      ),
    );
  }
}
