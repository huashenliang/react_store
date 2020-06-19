import Footer from 'rc-footer';
import 'rc-footer/assets/index.css'; // import 'rc-footer/asssets/index.less';
import React from 'react';

const RC_footer = () => {
  return ( 

        <Footer
            columns={[
              {
                title: 'Contact Info',
                items: [
                  {
                    title: 'Lorem Ipsum',
                    openExternal: true,
                  },
                  {
                    title: 'Lorem Ipsum',
                    openExternal: true,
                  },
                  {
                    title: 'Number',
                    description: '100-000-000',
                  },
                ],
              },
              {
                title: 'About Us',
                items: [
                  {
                    title: 'Lorem Ipsum',
                    openExternal: true,
                  },
                  {
                    title: 'Lorem Ipsum',
                    openExternal: true,
                  },
                  {
                    title: 'Number',
                    description: '100-000-000',
                  },
                ],
              },
              {
                title: 'More products',
                items: [
                  {
                    title: 'Lorem Ipsum',
                    openExternal: true,
                  },
                  {
                    title: 'Lorem Ipsum',
                    openExternal: true,
                  },
                  {
                    title: 'Number',
                    description: '100-000-000',
                  },
                ],
              },
              {
                title: 'Contact Info',
                items: [
                  {
                    title: 'Lorem Ipsum',
                    openExternal: true,
                  },
                  {
                    title: 'Lorem Ipsum',
                    openExternal: true,
                  },
                  {
                    title: 'Number',
                    description: '100-000-000',
                  },
                ],
              },
            ]}
            bottom="Copyright @2020 Huashen Liang"
          ></Footer>

   
  );
}
 
export default RC_footer;

