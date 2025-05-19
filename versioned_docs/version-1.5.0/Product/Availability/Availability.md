---
title: Availability
hide_table_of_contents: true
pagination_next: null
pagination_prev: null
---

import DocCardList from '@theme/DocCardList';
import TOCInline from '@theme/TOCInline';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Availability

<Tabs>
<TabItem value="details" label="Details" default>

- **Block date** - สามารถ เปิด/ปิด วันให้ใช้บริการได้ 
- **Product/Option** - ชื่อ Product/Options
- **Cut-off time** - เวลาตัดรอบการจอง
- **Unit** - หน่วยของ Options
- **Bookable/Not Bookable** - สถานะว่าสามารถจองได้หรือไม่
- **View as a calendar / View as list** - เปลี่ยนมุมมองระหว่างปฏิทินและรายการ List

<Tabs>
<TabItem value="list" label="List" default>

- สามารถเลือกหลายตัวเลือก เพื่อ Update ข้อมูลพร้อมกันได้ มีเงื่อนไขว่าจะต้องเป็น Schedule เดียวกัน

![](/img/Availability_details.png)
![](/img/Multi-select_Availability.png)

</TabItem>
<TabItem value="calendar" label="Calendar">

- **ปฏิทินจะแสดงจำนวน Options, Bookable, Not Bookable** ในแต่ละวัน
- **Options** (สัญลักษณ์ฟ้า) - จำนวน Options ทั้งหมดที่มีในวันนั้น
- **Bookable** (สัญลักษณ์เขียว) - จำนวน Options ที่เปิดให้จองได้ในวันนั้น
- **Not Bookable** (สัญลักษณ์แดง) - จำนวน Options ที่ไม่สามารถจองได้ในวันนั้น
- สามารถคลิกที่แต่ละวันเพื่อเข้าดูแบบ List เป็นรายวันได้ว่ามี Options อะไรบ้าง

![](/img/Availability_calendar.png)

</TabItem>


</Tabs>

</TabItem>

<TabItem value="filter" label="Filter">

- **Search Product** - ค้นหาจากชื่อ Product
- **Search Option** - ค้นหาจากชื่อ Option
- **Date** - เลือกช่วงวันที่ที่ต้องการดู Product ที่มีการเปิด/ปิด ได้

![](/img/Availability_filter.png)

</TabItem>
<TabItem value="action" label="Action">

**Action Button**  
- **Block/Unblock** - ปุ่มสำหรับปิดหรือเปิดวันให้จองได้
- **Cut-off time** - ปรับ Cut-off time ได้​โดยอ้างอิงจาก Type ตอน Set ไว้ตอนสร้าง/แก้ไข Options
- **Unit** - ปรับ Unit เพื่อเพิ่ม/ลด จำนวนที่ต้องการได้

![](/img/Availability_actiona.png)

</TabItem>
</Tabs>
