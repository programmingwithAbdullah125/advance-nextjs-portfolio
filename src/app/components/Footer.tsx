"use client";
import Link from "next/link";
import { FaLinkedin, FaGithub, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-6 text-center">
      <p className="text-gray-400 text-sm">© 2025 Abdullah. All Rights Reserved.</p>

      {/* Social Media Links */}
      <div className="flex justify-center space-x-6 mt-4">
        <Link href="https://linkedin.com" target="_blank"><FaLinkedin className="text-2xl hover:text-blue-400 transition duration-300" /></Link>
        <Link href="https://github.com" target="_blank"><FaGithub className="text-2xl hover:text-gray-400 transition duration-300" /></Link>
        <Link href="https://twitter.com" target="_blank"><FaTwitter className="text-2xl hover:text-blue-300 transition duration-300" /></Link>
        <Link href="https://instagram.com" target="_blank"><FaInstagram className="text-2xl hover:text-pink-400 transition duration-300" /></Link>
        <Link href="https://youtube.com" target="_blank"><FaYoutube className="text-2xl hover:text-red-400 transition duration-300" /></Link>
      </div>

      {/* Contact Info */}
      <p className="mt-4 text-gray-400 text-sm">
        📩 Email: <a href="mailto:abc@gmail.com" className="hover:text-blue-400 transition">abc@gmail.com</a>
      </p>

      {/* Testimonials Link */}
      <div className="mt-4">
        <Link href="#testimonials" className="text-sm hover:text-blue-400 transition duration-300">View Testimonials</Link>
      </div>
    </footer>
  );
}
