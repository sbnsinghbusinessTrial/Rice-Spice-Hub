# Rice Spice Hub Coding Rules

Version: 1.0
Created: 2026-05-30
Status: Active

1. Business Division Codes
A = Foods
B = Fashion
C = Services
D = Online Shopping

Reserved for future:

E-Z = Future Expansion
2. Foods Category Codes
AA = Rice
AB = Dal, Lentils & Beans
AC = Atta, Flour & Grains
AD = Spices & Masala
AE = Oils & Ghee
AF = Meat & Seafood

AG = Vegetables & Fruits
AH = Dairy & Eggs
AI = Frozen Foods
AJ = Snacks & Namkeen
AK = Biscuits, Bakery & Sweets
AL = Tea, Coffee & Beverages

AM = Pickles, Sauces & Chutney
AN = Ready to Eat & Instant Foods
AO = Noodles, Pasta & Vermicelli
AP = Nuts, Dry Fruits & Seeds
AQ = Pantry Essentials
AR = Household & Cleaning
3. Subcategory Code Rules

Format:

AAA
AAB
AAC
...

Example:

AA = Rice

AAA = Basmati Rice
AAB = Japanese Rice
AAC = Jasmine & Asian Rice
AAD = Specialty Rice
AAE = Rice Products

Rule:

Parent Category + One Letter

Example:

AA + A = AAA
AA + B = AAB
AA + C = AAC
4. Product ID Rules

Format:

AAA0001
AAA0002
AAA0003

Rule:

[Subcategory Code][4-digit Number]

Examples:

AAA0001 = India Gate Basmati Rice 5kg
AAA0002 = India Gate Basmati Rice 10kg

ABA0001 = Red Lentils 1kg
ABA0002 = Yellow Lentils 1kg

Capacity:

0001 - 9999

Maximum:

9,999 products per subcategory
5. Image Naming Rules

Product Images:

AAA0001.jpg
AAA0002.jpg
ABA0001.jpg

Never use:

rice.jpg
best-rice.jpg
product1.jpg

Reason:

Product names may change.

Product IDs never change.

6. Folder Structure
Rice-Spice-Hub/
│
├─ index.html
│
├─ docs/
│   ├─ 01_Category_Master.xlsx
│   ├─ 02_Subcategory_Master.xlsx
│   ├─ 03_Product_Master.xlsx
│   ├─ 04_Price_Update.xlsx
│   └─ Coding_Rules.md
│
├─ categories/
├─ products/
├─ images/
├─ css/
├─ js/
└─ data/
7. Category Page Naming

Format:

AA-rice.html
AB-dal-lentils-beans.html
AC-atta-flour-grains.html

Rule:

[Category Code]-[Slug].html
8. Subcategory Page Naming

Format:

AAA-basmati-rice.html
AAB-japanese-rice.html
AAC-jasmine-rice.html
AAD-specialty-rice.html
AAE-rice-products.html

Rule:

[Subcategory Code]-[Slug].html
9. Product Image Folder Structure

Recommended:

images/
│
└── categories/
    │
    ├── AA-rice/
    │   ├── category.jpg
    │   │
    │   ├── AAA-basmati-rice/
    │   │   └── category.jpg
    │   │
    │   ├── AAB-japanese-rice/
    │   │   └── category.jpg
    │   │
    │   ├── AAC-jasmine-rice/
    │   │   └── category.jpg
    │   │
    │   ├── AAD-specialty-rice/
    │   │   └── category.jpg
    │   │
    │   └── AAE-rice-products/
    │       └── category.jpg
    │
    ├── AB-dal-lentils-beans/
    └── ...

Example:

images/categories/AA-rice/category.jpg

images/categories/AA-rice/AAA-basmati-rice/category.jpg

images/categories/AB-dal-lentils-beans/ABA-red-lentils/category.jpg

10. Product Image Structure
Purpose

Used for actual sellable products.

Structure
images/
│
└── products/
    │
    ├── AA-rice/
    │   ├── AAA-basmati-rice/
    │   │   ├── AAA0001.jpg
    │   │   ├── AAA0002.jpg
    │   │   └── AAA0003.jpg
    │   │
    │   ├── AAB-japanese-rice/
    │   └── ...
    │
    ├── AB-dal-lentils-beans/
    └── ...
Examples
images/products/AA-rice/AAA-basmati-rice/AAA0001.jpg

images/products/AA-rice/AAA-basmati-rice/AAA0002.jpg

images/products/AB-dal-lentils-beans/ABA-red-lentils/ABA0001.jpg
11. Product Code Format
Rule
[Subcategory Code][4-digit Number]
Examples
AAA0001
AAA0002
AAA0003

AAB0001
AAB0002

ABA0001
ABA0002
Notes
Always use 4 digits.
Start from 0001.
Never reuse a product code.
Product code is permanent.
12. Image Naming Rule
Category Images

Always:

category.jpg

Example:

images/categories/AA-rice/category.jpg

images/categories/AA-rice/AAA-basmati-rice/category.jpg
Product Images

Always:

[ProductCode].jpg

Example:

AAA0001.jpg
AAA0002.jpg
ABA0001.jpg

This keeps the entire system consistent:

Category
  ↓
Subcategory
  ↓
Product

13. Product Master Rules

Every product must have:

Product ID
Product Name
Brand
Category Code
Subcategory Code
Weight
Price
Image Name
Status

Example:

AAA0001
India Gate Basmati Rice
India Gate
AA
AAA
5kg
3500
AAA0001.jpg
Active
14. Status Rules
Active
Inactive
Coming Soon
Out of Stock
Discontinued
15. Homepage Grid Rules

Desktop:

6 Columns

Tablet:

4 Columns

Mobile:

3 Columns
16. Placeholder Rules

If products do not exist:

Display:

Coming Soon

instead of:

Not Available

Use:

placeholder.jpg

until product images are added.

17. Future Expansion Rules

Current:

A = Foods

Future:

B = Fashion
C = Services
D = Online Shopping

Use the same structure:

B
BA
BAA
BAA0001

C
CA
CAA
CAA0001
18. Subcategory Folder Structure

Format:

categories/
└── AA-rice/
    ├── AA-rice.html
    │
    ├── AAA-basmati-rice/
    │   ├── AAA-basmati-rice.html
    │   ├── AAA0001.html
    │   ├── AAA0002.html
    │   └── ...
    │
    ├── AAB-japanese-rice/
    │   └── AAB-japanese-rice.html
    │
    └── ...

Rule:

Each subcategory has its own folder.

Benefits:

- Easier maintenance
- Cleaner image references
- Product pages stay grouped with their subcategory
- Scales to thousands of products