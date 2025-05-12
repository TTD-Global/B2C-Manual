---
title: Booking list
hide_table_of_contents: true
---

import DocCardList from '@theme/DocCardList';
import TOCInline from '@theme/TOCInline';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<TabItem value="Booking">
 
จะมีส่วนสำคัญ 4 ส่วน ดังนี้

<Tabs>
<TabItem value="Booking ID" label="Table Booking" default>

**Table Booking** แสดงข้อมูลดังนี้
   - **Booking Date** - แสดงวันที่ที่ทำการจองเข้ามา
   - **Travel Date** - แสดงวันที่ที่ลูกค้าจะเดินทาง
   - **Booking ID** เมื่อกดจะเป็นการ View Booking เพื่อตรวจสอบรายละเอียดข้อมูลที่มีของ Booking นั้นๆ และสามารถ Confirm ได้
   - **Product** - แสดงข้อมูลชื่อ Product และชื่อ Option 
   - **Detail** - แสดงจำนวนผู้เดินทางและจำนวนเงินที่ลูกค้าชำระเงินเข้ามา
   - **Status** - แสดงสถานะของ Booking (จะแบ่งออกเป็น Pending / Confirmed / Cancelled)
   
![](/img/Booking_page.png)
        
</TabItem>
<TabItem value="Advanced Search" label="Advanced Search" >

**Advanced Search** ใช้ในการค้นหา Booking ที่มีในระบบ โดยสามารถค้นหาได้ดังนี้

    - ***Search Product*** ไว้ใช้ในการค้นหาชื่อ Product นั้นๆ
    - ***Booking ID*** ใช้ในการค้นหา Booking ID 
    - ***Booking date*** ใช้ในการค้นหาตามวันที่ที่มีการ Booking เข้ามา
    - ***Travel date*** ใช้ในการค้นหาตามวันที่ที่เริ่มกิจกรรม/วันออกเดินทาง
    - ***Status*** ใช้ในการค้นหาตาม Status (โดยจะ default ไว้ที่ All)

![](/img/Booking_advance_search.png)

</TabItem>

<TabItem value="Status" label="Status">

**Booking Status** แบ่งออกเป็น 3 สถานะดังนี้
- **Pending** สถานะรอ Admin ดำเนินการกด Booking Confirm กรณีที่ลู
- **Confirmed** สถานะ Booking Confirm แล้ว หรือ Instant Confirm เข้ามาอัตโนมัติ
- **Cancelled** สถานะ Booking ยกเลิก หรือ Refund
       
![](/img/Booking_status.png)
        
</TabItem>
<TabItem value="Action Button" label="Action Button">

**Action Button** ไว้ใช้ในการจัดการ Booking ต่างๆ ซึ่งจะแยกเป็น 3 ส่วนด้วยกันดังนี้

<TabItem value="Action">
<Tabs>
<TabItem value="View" label="View" default>

***View*** แสดงรายละเอียดข้อมูลของ Booking 

![](/img/Booking_view.png)

</TabItem>
<TabItem value="Confirm booking" label="Confirm booking" default>

***Confirm booking*** กดเพื่อทำการยืนยัน booking ให้ลูกค้า 

![](/img/Booking_action_confirm.png)

</TabItem>

</Tabs>
</TabItem>

        
</TabItem>
</Tabs>
</TabItem>



