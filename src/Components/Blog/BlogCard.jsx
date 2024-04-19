import React from "react";
import { Link } from "react-router-dom";

const BlogCard = () => {
  return (
    <div>
      <Link
        class="group flex flex-col h-full border border-gray-200 hover:border-transparent hover:shadow-lg transition-all duration-300 rounded-xl p-5 dark:border-neutral-700 dark:hover:border-transparent dark:hover:shadow-black/40"
        href="#"
      >
        <div class="aspect-w-16 aspect-h-11">
          <img
            class="w-full object-cover rounded-xl"
            src="https://images.unsplash.com/photo-1521321205814-9d673c65c167?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3548&q=80"
            alt="Image Description"
          />
        </div>
        <div class="my-6">
          <h3 class="text-xl font-semibold text-gray-800 dark:text-neutral-300 dark:group-hover:text-white">
            Front accounts - let's work together
          </h3>
          <p class="mt-5 text-gray-600 dark:text-neutral-400">
            Are you an accountant? Are you a company formation advisor?
          </p>
        </div>
        <div class="mt-auto flex items-center gap-x-3">
          <img
            class="size-8 rounded-full"
            src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80"
            alt="Image Description"
          />
          <div>
            <h5 class="text-sm text-gray-800 dark:text-neutral-200">
              By Lauren Waller
            </h5>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default BlogCard;
