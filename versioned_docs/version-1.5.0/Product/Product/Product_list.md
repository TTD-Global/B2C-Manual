---
title: Product
hide_table_of_contents: true
pagination_next: null
---

import DocCardList from '@theme/DocCardList';
import TOCInline from '@theme/TOCInline';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


<Tabs>
<TabItem value="details" label="Details" default>

- **Title** - ชื่อ Product 
- **Reviews** - จำนวน Reviews โดยเฉลี่ย เต็ม 5 ดวง
- **Status** - สถานะของ Product
    - **Publish** - แสดงที่หน้า Website
    - **Unpublish** - ไม่แสดงที่หน้า Website
    - **Draft** - Product สร้างไม่เสร็จสมบูรณ์

![](/img/Product-list.png)

</TabItem>
<TabItem value="filter" label="Filter">

<Tabs>
<TabItem value="Search Product" label="Search Product" default>

- **Search Product** - ไว้ใช้ในการกรอกค้นหาชื่อ Product

    ![](/img/Product-filter-search.png)

</TabItem>
<TabItem value="Filter by status" label="Filter by status">

**Filter by status** มี Status ดังนี้
    - ***All product*** แสดง Status ของ Product ที่มีทั้งหมด (โดยจะแสดง Status : Draft ขึ้นก่อนเสมอ)
    - ***Publish*** แสดง Product ที่มี Status : Publish ทั้งหมด
    - ***Unpublish*** แสดง Product ที่มี Status : Unpublish ทั้งหมด
    - ***Draft*** แสดง Product ที่มี Status : Draft ทั้งหมด

    ![](/img/Product-filter-status.png)

</TabItem>
<TabItem value="Filter type" label="Filter type">

- ***Most popular*** แสดง Product ที่มีการเลือกไว้ให้อยู่ในหมวดหมู่ Most popular 
- ***Add product*** เพื่อเพิ่ม product ที่ต้องการให้แสดงในหมวดหมู่ Most popular ได้ 
- สามารถเลื่อนปรับตำแหน่งที่ต้องการได้ 8 product (โดยหากเกิน 8 product จะแสดงใน see more)
        ![](/img/Product-filter-most-popular-show.png)
        ![](/img/Product-filter-most-popular-add.png)

</TabItem>
</Tabs>

</TabItem>
<TabItem value="action" label="Action">

<Tabs>
<TabItem value="View" label="View" default>

<Tabs>
<TabItem value="Manage Product" label="Manage Product" default>

- ***Public - Unpublish*** เผยแพร่ - ไม่เผยแพร่ สู่ Website
- ***Delete Product*** ลบ Product
- ***View reviews*** New Tab ไปยังหน้า Reviews
- ***View on website*** แสดงหน้า Product detail บน Website

![](/img/Product-manage-product.png)

</TabItem>
<TabItem value="Product" label="Product">

- ***Status*** จะแสดงสถานะ 3 สถานะ ดังนี้
    - **Publish** ผลิตภัณฑ์หรือเนื้อหาที่กำลังใช้งานหรือเผยแพร่อยู่
    - **Unpublish** การหยุดใช้งานหรือยกเลิกการเผยแพร่ผลิตภัณฑ์หรือเนื้อหา
    - **Draft** ผลิตภัณฑ์หรือเนื้อหาที่ยังไม่เผยแพร่และอยู่ในสถานะร่าง
- ***Action*** สามารถทำการแก้ไขข้อมูล Product หรือเปิดดู Website ของ Product นี้

![](/img/Product-detail-status.png)
![](/img/Product-detail-product-action.png)

</TabItem>
<TabItem value="Options" label="Options">

- ***Create new option*** สร้าง Option
- ***Status*** จะแสดงสถานะ 3 สถานะ ดังนี้
    - **Active** ผลิตภัณฑ์หรือเนื้อหาที่กำลังใช้งานหรือเผยแพร่อยู่
    - **Deactivate** การหยุดใช้งานหรือยกเลิกการเผยแพร่ผลิตภัณฑ์หรือเนื้อหา
    - **Draft** ผลิตภัณฑ์หรือเนื้อหาที่ยังไม่เผยแพร่และอยู่ในสถานะร่าง (หากกรอกข้อมูลไม่ครบทุกขั้นตอนจะขึ้นสถานะเป็น "Draft")
- ***Action*** สามารถทำการแก้ไข, Logs, Deactivate, Delete เพื่อจัดการ Option
- **Edit** สามารถทำการแก้ไข Option ได้
- **Active - Deactivate** เปิด - ปิด การใช้งาน Option นี้
- **Delete** ลบ Option ออก
{/* - *Logs* บันทึกกิจกรรมที่เกี่ยวข้องกับตัวเลือก Option นี้ */}

![](/img/Product-detail-option-action.png)

</TabItem>
</Tabs>
</TabItem>

<TabItem value="View on website" label="View on website">

**View on website** แสดงหน้า Product detail ตัวอย่างบน Website

![](/img/Product_preview.jpeg)

</TabItem>
</Tabs>

</TabItem>
</Tabs>

