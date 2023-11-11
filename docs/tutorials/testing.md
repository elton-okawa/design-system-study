# Testing

Categories

- Test runner
- Visual tests
- Accessibility tests
- Interaction tests
- Snapshot tests

## Test runner

Runs all executable tests:

- For those **with** `play function`, it checks for errors and assertions
- For those **without** `play function`, it checks whether the story renders without any errors

## Visual tests

Store snapshots and compare then between versions:

- [Chromatic](https://www.chromatic.com/) freemium service
- [Test Runner with image snapshot](https://github.com/storybookjs/test-runner#image-snapshot) self hosted alternative

## Accessibility tests

Checking support of keyboard navigation, screen reader support, touch-friendly, usable color contrast, reduced motion and zoom support.

Uses [a11y addon](https://storybook.js.org/addons/@storybook/addon-a11y) that catches around 57% issues

## Interaction tests

Simulate user behavior using `play function`

- Find DOM elements
- Perform some actions

## Test coverage

Using [Storybook addon coverage](https://github.com/storybookjs/addon-coverage)

Bug: coverage report on console not appearing for some reason [Issue #13](https://github.com/storybookjs/addon-coverage/issues/13)
