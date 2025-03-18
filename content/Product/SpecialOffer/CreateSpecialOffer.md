---
title: Create Special Offer
hide_table_of_contents: true
---

import DocCardList from '@theme/DocCardList';
import TOCInline from '@theme/TOCInline';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<TabItem value="Action">

การสร้าง Special Offer มีทั้งหมด 3 ขั้นตอนดังนี้

<Tabs>
<TabItem value="Step1" label="Products & Options" default>

**Products & Options** เป็นขั้นตอนแรกในการสร้าง Special Offer

![](/img/Create-SpecialOffer.png)

- **Special Offer Name** ตั้งชื่อ Special Offer (Admin เห็นได้เท่านั้น Customer จะมองไม่เห็น)
- **Products & Options** เลือก Product และ Options สำหรับ Special Offer นี้
  - Options เป็น Multi-select สามารถเลือกได้มากกว่า 1 อัน
  - สามารถเพิ่ม Product ได้โดยการกดปุ่ม "Add products & options"
  - หากมีมากกว่า 2 Product ขึ้นไป สามารถกดลบได้ที่ไอคอน "-" 
  - สามารถกด "Clear all" เพื่อล้างรายการ Options- ทั้งหมด

</TabItem>

<TabItem value="Step2" label="Details">

**Details** เป็นขั้นตอนที่สองในการกำหนดรายละเอียดของ Special Offer

![](/img/Details-SpecialOffer.png)

<Tabs>
<TabItem value="DateRange" label="Date" default>

**ช่วงวันที่ของ Special Offer (Date range)** 
- เลือกช่วงเวลาที่ต้องการลดราคา
- สามารถเลือกเป็น Range Date หรือเลือกวันเดียวก็ได้
- ระบบจะแสดงปฏิทินให้เลือกวันที่เริ่มต้นและวันที่สิ้นสุดของโปรโมชัน

![](/img/Date-SpecialOffer.png)

</TabItem>

<TabItem value="TypeOptions" label="Type of Special Offer">

**ประเภทของ Special Offer (Type)** มีทั้งหมด 3 รูปแบบ

<Tabs>
<TabItem value="Limited" label="Limited-time offer" default>

**Limited-time offer**: ลดราคาตามวันที่ที่เรากำหนด
- Attract customers to activity dates and time slots you struggle to fill
- ตัวอย่างเช่น Monday mornings
- เหมาะสำหรับกิจกรรมที่มีช่วงเวลาที่ไม่ค่อยมีลูกค้าจอง

<!-- ![](/img/Limited-time-offer.jpeg) -->

</TabItem>

<TabItem value="Early" label="Early-bird offer">

**Early-bird offer**: ลดราคาล่วงหน้า
- To attract bookings at least 7 days in advance
- สามารถกำหนดวันล่วงหน้าได้ว่าต้องการกี่วันล่วงหน้า แต่จะต้องไม่ต่ำกว่า 7 วัน
- การตั้งค่านี้จะแสดงเมื่อเลือก Early-bird offer
- มีช่องให้ใส่จำนวนวันล่วงหน้า (เช่น 7) และหน่วย "Days"

<!-- ![](/img/Early-bird-offer.jpeg) -->

</TabItem>

<TabItem value="Last" label="Last-minute offer">

**Last-minute offer**: ลดราคาก่อนเริ่มกิจกรรม/จอง
- For activities happening very soon, e.g. in 3 days' time
- สามารถกำหนดวันที่ต้องการกี่วัน แต่จะต้องไม่มากกว่า 3 วัน และไม่น้อยกว่า 0 วัน
- การตั้งค่านี้จะแสดงเมื่อเลือก Last-minute offer
- มีช่องให้ใส่จำนวนวัน (เช่น 3) และหน่วย "Days"
- Notice period: Last-minute offer - For any unsold spots up to (3) days before the activity

<!-- ![](/img/Last-minute-offer.jpeg) -->

</TabItem>
</Tabs>

</TabItem>

<TabItem value="TimeSlots" label="Time Slots">

**Time slots ที่รวมในโปรโมชัน** มีทั้งหมด 2 รูปแบบ

<Tabs>
<TabItem value="AllTimeSlots" label="All Time Slots" default>

**Include all days and time slots**: เลือกทุกวัน ทุกเวลาที่มีใน Options นั้นๆ
- Special Offer จะใช้ได้กับทุกวันและทุกเวลาที่มีให้บริการในสินค้าที่เลือก
- เป็นตัวเลือกที่ง่ายที่สุดหากต้องการให้โปรโมชันใช้ได้กับทุกช่วงเวลา

<!-- ![](/img/All-time-slots.jpeg) -->

</TabItem>

<TabItem value="SpecificTimeSlots" label="Specific Time Slots">

**Include specific weekdays and time slots**: สามารถกำหนดวัน เวลา ที่ต้องการได้
- ระบบจะแสดงวันและเวลาที่มีใน Options นั้นๆ
- หากมีหลาย Product หลาย Options และมีหลายเวลา ระบบจะนำข้อมูลของทุก Options มารวมกันแล้วแสดงวันและเวลา
- สามารถเลือกวันในสัปดาห์ (จันทร์-อาทิตย์) และช่วงเวลา (08:00, 09:00, 10:00, 11:00, ฯลฯ) ที่ต้องการให้มี Special Offer
- เหมาะสำหรับการทำโปรโมชันเฉพาะบางวันหรือบางช่วงเวลา เช่น วันธรรมดา หรือช่วงเช้าเท่านั้น

<!-- ![](/img/Set-Time-Slot-Option.jpeg) -->

</TabItem>
</Tabs>

</TabItem>
</Tabs>

</TabItem>

<TabItem value="Step3" label="Discount">

**Discount** เป็นขั้นตอนสุดท้ายในการกำหนดส่วนลดของ Special Offer

<!-- ![](/img/Create-SpecialOffer-Step3.jpeg) -->

- **จำนวนที่นั่งของ Special Offer (Spots)** มี 2 ตัวเลือก
  - **Include all bookable spots available**: ไม่จำกัดจำนวน
  - **A limited number**: กำหนดจำนวนที่จำกัด เช่น 5 ที่นั่ง

- **ส่วนลด (Discount)** 
  - กำหนดส่วนลดเป็นเปอร์เซ็นต์ เช่น 10%

- **ปุ่ม Previous**: ย้อนกลับไปขั้นตอนก่อนหน้า
- **ปุ่ม Finish**: เสร็จสิ้นการสร้าง Special Offer

</TabItem>
</Tabs>

</TabItem>
