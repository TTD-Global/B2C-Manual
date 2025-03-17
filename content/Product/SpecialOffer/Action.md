---
title: Button Action
hide_table_of_contents: true
---
import DocCardList from '@theme/DocCardList';
import TOCInline from '@theme/TOCInline';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<TabItem value="Action">

ใช้ในการจัดการ Special Offer ประกอบด้วย 4 ส่วนดังนี้

<!-- ![](/img/Special-offer-button-action.jpeg) -->

<Tabs>
<TabItem value="ViewOffer" label="View" default>

**View** แสดงข้อมูล Special Offer Detail แบ่งเป็น 2 ส่วนดังนี้

<Tabs>
<TabItem value="ManageOffer" label="Manage Special Offer" default>

**Manage Special Offer** การจัดการ Special Offer แบ่งเป็น 2 อย่างดังนี้

- **Pause-Reactive** จัดการเปิดการใช้งาน / หยุดการใช้งานของ Special Offer
- **Delete Special Offer** ลบ Special Offer

<!-- ![](/img/Special-offer-manage.jpeg) -->

</TabItem>

<TabItem value="OfferDetails" label="Special Offer details">

**Special Offer details** แสดงข้อมูล Special Offer ดังนี้

- **Status** แสดง Status 3 อย่างคือ Active, Paused และ Expired
- **Discount Amount** แสดงเปอร์เซ็นต์ส่วนลด เช่น 10%
- **Button Action** กดเพื่อทำการ Edit ได้
- **Name** ชื่อของ Special Offer แสดงเป็น "//Special offer name"
- **Applies to** แสดงสินค้าหรือบริการที่สามารถใช้โปรโมชั่นนี้ได้
- **Claiming Period** ช่วงระยะเวลาในการใช้ Special Offer
- **Usage Quantity** หากตั้งค่าเป็น Specific จะแสดงจำนวนสูงสุดที่สามารถใช้ Special Offer ได้ หากตั้งค่าเป็น No limit จะแสดง "No limit"
- **Usage** หากตั้งค่าเป็น Specific จะแสดง "จำนวนผู้ใช้โค้ด / จำนวนสูงสุดที่สามารถใช้ Special Offer ได้" เช่น "1/5" หากตั้งค่าเป็น No limit จะแสดงจำนวนผู้ใช้ Special Offer เช่น "1"

<!-- ![](/img/Special-offer-details.jpeg) -->

</TabItem>
</Tabs>

</TabItem>

<TabItem value="EditOffer" label="Edit">

**Edit** สามารถแก้ไขข้อมูล Special Offer ได้ดังนี้

- **Special Offer Name** ชื่อ Special Offer
- **Discount Amount** เปอร์เซ็นต์ส่วนลด
- **Applies to** สินค้าหรือบริการที่จะใช้กับโปรโมชั่นนี้
- **Claiming Period** วันที่เริ่มต้นและวันสิ้นสุดของโปรโมชั่น
- **Usage Quantity** จำนวนครั้งที่สามารถใช้โปรโมชั่นได้

<!-- ![](/img/Special-offer-edit.jpeg) -->

</TabItem>

<TabItem value="StatusChange" label="Pause-Reactivate">

**Pause-Reactivate** ปรับเปลี่ยนสถานะที่ใช้งานอยู่เพื่อเปิด-หยุดการใช้งานของ Special Offer

- **Active** เปิดใช้งาน Special Offer
- **Paused** หยุดการใช้งาน Special Offer ชั่วคราว
- **Expired** ทำให้ Special Offer หมดอายุ

<!-- ![](/img/Special-offer-status-change.jpeg) -->

</TabItem>

<TabItem value="DeleteOffer" label="Delete">

**Delete** ลบ Special Offer ออกจากระบบ

<!-- ![](/img/Special-offer-delete.jpeg) -->

</TabItem>
</Tabs>

</TabItem>
