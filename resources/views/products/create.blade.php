@extends('layouts.app')
@section('content')
    @include('layouts.navbar')
    <div>
        <div class="max-w-4xl mx-auto py-10 sm:px-6 lg:px-8">
            <div class="mt-5 md:mt-0 md:col-span-2">
                <form method="post" action="{{ route('admin.store') }}" enctype="multipart/form-data">
                    @csrf
                    <div class="shadow overflow-hidden sm:rounded-md">
                        <div class="px-4 py-5 bg-white sm:p-6">
                            <label for="name" class="block mb-2 font-medium text-sm text-gray-700">Product Name</label>
                            <input
                                id="name"
                                name="name"
                                value="{{ old('name', '') }}"
                                class="w-full bg-gray-100 rounded border border-gray-400 focus:outline-none focus:border-indigo-500 text-base px-4 py-2"
                            />
                            @error('name')
                            <p class="text-sm text-red-600">{{ $message }}</p>
                            @enderror
                        </div>
                        <div class="px-4 py-5 bg-white sm:p-6">
                            <label for="designer" class="block mb-2 font-medium text-sm text-gray-700">Designer</label>
                            <input
                                id="designer"
                                name="designer"
                                value="{{ old('designer', '') }}"
                                class="w-full bg-gray-100 rounded border border-gray-400 focus:outline-none focus:border-indigo-500 text-base px-4 py-2"
                            />
                            @error('designer')
                            <p class="text-sm text-red-600">{{ $message }}</p>
                            @enderror
                        </div>
                        <div class="px-4 py-5 bg-white sm:p-6">
                            <label for="description" class="block mb-2 font-medium text-sm text-gray-700">Description</label>
                            <textarea id="description" name="description"
                                      class="w-full bg-gray-100 rounded border border-gray-400 focus:outline-none focus:border-indigo-500 text-base px-4 py-2">

                            </textarea>
                            @error('description')
                            <p class="text-sm text-red-600">{{ $message }}</p>
                            @enderror
                        </div>
                        <div class="px-4 py-5 bg-white sm:p-6">
                            <label for="price" class="block mb-2 font-medium text-sm text-gray-700">Price</label>
                            <input
                                id="price"
                                name="price"
                                value="{{ old('price', '') }}"
                                class="w-1/2 bg-gray-100 rounded border border-gray-400 focus:outline-none focus:border-indigo-500 text-base px-4 py-2"
                            />
                            @error('price')
                            <p class="text-sm text-red-600">{{ $message }}</p>
                            @enderror
                        </div>
                        <div class="px-4 py-5 bg-white sm:p-6">
                            <label for="file" class="block mb-2 font-medium text-sm text-gray-700">Product Image</label>
                            <input type="file" name="file" required>
                        </div>
                        <div class="flex items-center justify-end px-4 py-3 bg-gray-50 text-right sm:px-6">
                            <button class="inline-flex items-center px-4 py-2 bg-gray-800 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-gray-700 active:bg-gray-900 focus:outline-none focus:border-gray-900 focus:shadow-outline-gray disabled:opacity-25 transition ease-in-out duration-150">
                                Create
                            </button>
                            <span class="mx-8 inline-flex items-center px-4 py-2 bg-red-800 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-gray-700 active:bg-gray-900 focus:outline-none focus:border-red-900 focus:shadow-outline-red disabled:opacity-25 transition ease-in-out duration-150">
                                <a href="/admin">
                                    Cancel
                                </a>
                            </span>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
@endsection

