---
title: Create Refund
hide_table_of_contents: true
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Create Refund

### ขั้นตอนการสร้างรายการขอคืนเงิน

<Tabs>
<TabItem value="steps1" label="Create Refund" default>
1. คลิกปุ่ม "Create refund"

![](/img/Create_refund1.png)


2. กรอก Booking ID ที่ต้องการขอคืนเงิน
3. เลือกเหตุผลในการขอคืนเงิน จากตัวเลือกที่มีให้
4. เลือกประเภทการคืนเงิน:
   - ***Full Refund*** - คืนเงินเต็มจำนวน
   - ***Partial Refund*** - คืนเงินบางส่วน
5. ตรวจสอบจำนวนเงินที่คืน
6. กดปุ่ม "Continue" เพื่อไปขั้นตอนถัดไป

![](/img/Step_Create_refund.png)
![](/img/Step1_create_partial_refund.png)

</TabItem>
<TabItem value="steps2" label="Check Details" >

1. **Booking Details** - บอกข้อมูลของ Bookings
2. **Refund Details** - บอกข้อมูลของ Refund

![](/img/Check_details.png)

3. **Bank Account** 
- สำหรับกรณีที่ลูกค้าชำระเงินเข้ามาเป็น Credit/Debit จะไม่มีข้อมูลส่วนนี้
- สำหรับกรณีที่ลูกค้าชำระเงินเข้ามาเป็น PromptPay ลูกค้าจะต้องกรอกข้อมูลบัญชีธนาคารในระบบ Website

3.1 **หากมี Bank Account**

![](/img/have_bankAcc.png)

3.2 **หากไม่มี Bank Account** - Button จะเป็น Awaiting Contact ให้ Admin ติดต่อไปหาลูกค้าเพื่อแจ้งว่ายังไม่ได้มีการกรอกข้อมูลบัญชีธนาคาร

![](/img/no_have_bank_acc.png)

</TabItem>
</Tabs>
