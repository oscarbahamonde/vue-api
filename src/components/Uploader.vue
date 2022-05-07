<template>
<h1>Fucking Hello</h1>
<form :action="url" method="POST" enctype="multipart/form-data">
<label for="file"
    @click="handleClick"
    @dragenter="handleDragEnter"
    @dragleave="handleDragLeave"
    @dragover="handleDragOver"
    @drop="handleDrop"
    >Drag and drop your files here or click to add multiple files</label>
<input type="file" name="file" id="file" multiple
      @change="onFileChange"
        accept="image/*,video/*,audio/*,application/pdf,application/vnd.openxmlformats-officedocument.wordprocessingml.document,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet,application/vnd.openxmlformats-officedocument.presentationml.presentation"
        />



<input type="submit" value="Upload"
    



>
</form>
</template>