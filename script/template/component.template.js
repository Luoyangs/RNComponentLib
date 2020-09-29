exports.componentSrcIndex = {
  path: 'src/components/<%COMPONENT%>/src/<%component%>.tsx',
  temp: `import React from 'react';
import { View } from 'react-native';
import { <%COMPONENT%>Props } from './types';
import styles from './styles';

export default class <%COMPONENT%> extends React.Component<<%COMPONENT%>Props> {
  render() {
    return <View></View>;
  }
};`,
};

exports.componentSrcType = {
  path: 'src/components/<%COMPONENT%>/src/types.ts',
  temp: `export interface <%COMPONENT%>Props {}
`,
};

exports.componentSrcStyle = {
  path: 'src/components/<%COMPONENT%>/src/styles.ts',
  temp: `import { StyleSheet } from 'react-native';

export default StyleSheet.create({});
`,
};

exports.componentIndex = {
  path: 'src/components/<%COMPONENT%>/index.ts',
  temp: `export { default as RN<%COMPONENT%> } from './src/<%component%>';
export * from './src/types';
`,
};

exports.componentReadme = {
  path: 'src/components/<%COMPONENT%>/README.md',
  temp: `## <%COMPONENT%>

a brief description of the component


### Props
| Property    | Description              | Type   | Accepted Values | Default |
| ----------- | ------------------------ | ------ | --------------- | ------- |
|  |  |  |  |  |
`,
};

exports.component = {
  path: 'src/components/index.ts',
  temp: `
<% for %>
export * from './<%COMPONENT%>';
<% /for %>
`,
};

exports.componentExample = {
  path: 'examples/<%component%>.tsx',
  temp: `import React from 'react';
import { View, Text } from 'react-native';
import { RN<%COMPONENT%>, RNCard } from '@/components';
import globalStyles from '@/public/styles';

export const RN<%COMPONENT%>Exp = () => {
  return (
    <View>
      <Text style={globalStyles.header}><%COMPONENT%></Text>
      <RNCard withPadding={true} title={'Default <%COMPONENT%>'}>
        <RN<%COMPONENT%>>Default</RN<%COMPONENT%>>
      </RNCard>
    </View>
  );
};
`,
};

exports.app = {
  path: 'App.tsx',
  temp: `
<% for %>
import { RN<%COMPONENT%>Exp } from '@/examples/<%component%>';
<% /for %>
`,
};
