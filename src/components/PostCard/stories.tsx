import { Story } from '@storybook/react/types-6-0';
import { FunctionComponent } from 'react';

interface PostCardProps {
  title: string;
  image: string;
  slug: string;
}

const MyComponent: FunctionComponent<PostCardProps> = (props) => {
  return <h1>{JSON.stringify(props)}</h1>;
};

export default {
  title: 'MyComponent',
  component: MyComponent,
  args: {
    slug: 'default-slug',
    title: 'default-title',
    cover: 'default-cover.png',
  },
};

export const FirstTest: Story<PostCardProps> = (args) => {
  return (
    <div style={{ maxWidth: '36rem' }}>
      <MyComponent {...args} />
    </div>
  );
};
