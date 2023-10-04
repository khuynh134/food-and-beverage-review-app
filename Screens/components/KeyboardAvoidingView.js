import React from "react";
import { KeyboardAvoidingView, 
    ScrollView, 
    TouchableWithoutFeedback, 
    Keyboard } from 'react-native';

const KeyboardAvoidingWrapper = ({children}) => {
    return(
        <KeyboardAvoidingView style={{flex: 1, backgroundColor: '#f0fbfa'}}>
            <ScrollView>
                <TouchableWithoutFeedback onPress={(Keyboard.dismiss)}>
                    {children}
                </TouchableWithoutFeedback>
            </ScrollView>
        </KeyboardAvoidingView>
    );
}

export default KeyboardAvoidingWrapper;