export type SampleAT = {
  a: string;
  b: number;
};

export type SampleBT = [a: string, b: number];

export type PostT = {
  author: string;
  body: string;
};

export type TextAreaChangeI = React.ChangeEvent<HTMLTextAreaElement>;

export type InputChangeI = React.ChangeEvent<HTMLInputElement>;

export type PostListI = {
  isPosting: boolean;
  // onStopPosting: (event: React.SyntheticEvent) => void
  onStopPosting: () => void;
};

export type NewPostT = {
  // onBodyChange: (event: TextAreaChangeI) => void,
  // onAuthorChange: (event: InputChangeI) => void,
  // onCancel: (event: React.SyntheticEvent) => void
  onCancel: () => void;
  onAddPost: (postData: PostT) => void;
};

export type ModalT = {
  children: React.ReactNode;
  // onClose: (event: React.SyntheticEvent) => void
  onClose: () => void;
};

export type MainHeaderT = {
  // onCreatePost: (event: React.SyntheticEvent) => void
  onCreatePost: () => void;
};
