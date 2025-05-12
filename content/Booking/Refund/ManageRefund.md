---
title: Manage Refund
hide_table_of_contents: true
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Manage Refund 

- หากขอคืนเงินเข้ามาเป็น Credit/Debit ระบบจะดำเนินการให้อัตโนมัติ
- หากขอคืนเงินเข้ามาเป็น PromptPay จะต้องดำเนินการเอง โดยจะดำเนินการตามสถานะดังนี้

<Tabs>
<TabItem value="status" label="1. Pending" default>

1. **Pending** - รอการตรวจสอบและอนุมัติ
   - รายการขอคืนเงินถูกสร้างและรอการตรวจสอบ
   - เจ้าหน้าที่จะตรวจสอบข้อมูลและบัญชีธนาคาร
   - หากลูกค้ากรอกบัญชีธนาคารเข้ามาเรียบร้อย จะสามารถกดปุ่ม Set In Progress

![](/img/Action_Set_in_progress.png)

   - กด View เพื่อเข้ามาดูรายละเอียดก่อนแล้วกด Set In Progress ได้

![](/img/Set_in_progress.png)


</TabItem>

<TabItem value="details" label="2. In Progress">

2. **In Progress** - อยู่ระหว่างดำเนินการคืนเงิน
   - รายการได้รับการอนุมัติและอยู่ระหว่างการดำเนินการ
   - กำลังดำเนินการโอนเงินคืน
   - หากดำเนินการโอนเงินเสร็จแล้ว สามารถกด Make A Refund ได้ เพื่อใส่วันที่และใส่รูปหลักฐานการคืนเงิน

![](/img/Action_make_a_refund.png)
![](/img/View_make_a_refund.png)

   - โดยจะต้องระบุวันที่ที่ทำการโอนเงินสำเร็จ และแนบไฟล์รูปภาพหลักฐาน หลังจากนั้นทำการกด Confirm เพื่อเข้าสู่สถานะ Completed
![](/img/Make_a_refund.png)

</TabItem>

<TabItem value="actions" label="3. Completed">

3. **Completed** - ดำเนินการคืนเงินเรียบร้อยแล้ว
   - การคืนเงินเสร็จสมบูรณ์
   - ลูกค้าได้รับเงินคืนเรียบร้อยแล้ว

![](/img/Completed_refund.png)

</TabItem>
</Tabs> 