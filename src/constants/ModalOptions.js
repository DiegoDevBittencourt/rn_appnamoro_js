import { theme } from './StyledComponentsTheme';

export const modalOptions = {
    headerShown: false,
    cardStyle: { backgroundColor: theme.$opaqueBlackBackgroundColor },
    cardOverlayEnabled: true,
    cardStyleInterpolator: ({ current: { progress } }) => ({
        overlayStyle: {
            opacity: progress.interpolate({
                inputRange: [0, 5],
                outputRange: [0, 0.6],
                extrapolate: "clamp"
            })
        }
    })
};