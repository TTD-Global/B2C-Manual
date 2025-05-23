import React from 'react';
import { Redirect } from '@docusaurus/router';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Version from '@site/version.config';

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <Redirect to= {`/B2C-Manual/content/${Version}/Product/Product/Product_list`} />
      {/* เมื่อผู้ใช้เข้าเว็บไซต์ จะถูก Redirect ไปที่หน้า Dashboard โดยอัตโนมัติ */}
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
