/* ─────────────────────────────────────────
   DATA
───────────────────────────────────────── */
export const skills = [
  {
    label: "Front-end",
    items: ["JavaScript (ES6+)", "TypeScript", "ReactJS", "NextJS", "Vite", "Tailwind CSS", "HTML5/CSS3"],
    highlight: true,
  },
  {
    label: "Back-end",
    items: ["NodeJS", "Express.js", "NestJS", "RESTful API", "MongoDB", "PostgreSQL"],
    highlight: true,
  },
  {
    label: "Specialization",
    items: ["Website Builder / CMS", "System Architecture", "Landing Page Optimization"],
    highlight: false,
  },
  {
    label: "Tools",
    items: ["Git", "Docker", "Postman", "API Dog", "Vercel", "Figma"],
    highlight: false,
  },
  {
    label: "Soft Skills",
    items: ["Team Lead (3+)", "Mentoring", "Problem Solving", "Communication"],
    highlight: false,
  },
];

export const experiences = [
  {
    period: "12/2025 – 03/2026",
    role: "Full-stack Developer",
    company: "Teknix Company",
    points: [
      "Phối hợp Solution Architect xây dựng no-code Website Builder (tương tự Framer/Webflow) với drag-and-drop UI và automated deployment.",
      "Dẫn dắt team 3 thành viên, trình bày demo và đào tạo kỹ thuật cho toàn bộ nhân viên.",
      "Kiến trúc scalable backend cho hệ thống đặt lịch y tế bằng NestJS và Kysely.",
    ],
  },
  {
    period: "04/2023 – 10/2024",
    role: "Front-end Developer",
    company: "Cozrum Company",
    points: [
      "Phát triển và nâng cấp các module CMS cốt lõi cho kế toán và quản lý nhân sự theo yêu cầu CEO.",
      "Tối ưu UI/UX để cải thiện quy trình vận hành nội bộ chuỗi khách sạn quy mô lớn.",
      "Dẫn dắt team 3 thành viên và interns, đào tạo kỹ thuật toàn bộ staff.",
    ],
  },
  {
    period: "06/2022 – 03/2023",
    role: "Front-end Blockchain Developer",
    company: "Delta Labs Company",
    points: [
      "Xây dựng UI/UX tương tác và tính năng cho các website sự kiện blockchain lưu lượng cao.",
      "Được thăng lên Full-time sau 3 tháng thực tập.",
      "Đạt giải Nhân viên xuất sắc Tháng/Năm vì đóng góp kỹ thuật nổi bật.",
    ],
  },
];

export const projects = [
  {
    name: "XStudio Tool",
    team: 3,
    role: "Full-stack Developer",
    description:
      "Website builder tự động sinh source code và deploy khi nhập tên project. Drag-and-drop chỉnh sửa giao diện, tích hợp AI sinh component, quản lý tài nguyên.",
    tech: ["ReactJS", "NextJS", "ExpressJS", "Dify AI", "MongoDB", "Redux Toolkit", "Cloudinary"],
  },
  {
    name: "Devose-case",
    team: 4,
    role: "Backend Architect",
    description:
      "Hệ thống quản lý y tế toàn diện. Kiến trúc toàn bộ database schema (ERD), backend infrastructure bảo mật cho dữ liệu y tế nhạy cảm.",
    tech: ["NestJS", "PostgreSQL", "Kysely", "Docker", "Swagger", "Google OAuth 2.0"],
  },
  {
    name: "Cozrum CMS",
    team: 4,
    role: "Frontend",
    description:
      "CMS quản lý ca làm việc, sơ đồ dòng tiền, biểu đồ lỗi tài sản cho nhân viên chuỗi khách sạn.",
    tech: ["ReactJS", "Ant Design", "Redux Saga", "React-Flow"],
  },
  {
    name: "Run Together",
    team: 8,
    role: "Frontend",
    description:
      "DApp mua bán, trao đổi và quản lý cộng tác viên. Làm việc trực tiếp với blockchain smart contracts.",
    tech: ["ReactJS", "Next.js", "React Hook Form", "Storybook", "Redux Toolkit"],
  },
  {
    name: "TSS LiveTrade",
    team: 7,
    role: "Frontend",
    description:
      "Website chứng nhận và quản lý tài sản kỹ thuật số, xây dựng UI và tích hợp RESTful API.",
    tech: ["ReactJS", "Material UI", "Redux Toolkit", "Formik & Yup"],
  },
];
